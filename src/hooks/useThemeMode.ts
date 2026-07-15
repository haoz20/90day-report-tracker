import { useEffect, useState } from 'react'

export type ThemeMode = 'auto' | 'light' | 'dark'
export type EffectiveTheme = 'light' | 'dark'

const STORAGE_KEY = 'theme-mode'
const VALID_MODES: ThemeMode[] = ['auto', 'light', 'dark']

function readStoredMode(): ThemeMode {
  if (typeof window === 'undefined') return 'auto'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return VALID_MODES.includes(stored as ThemeMode) ? (stored as ThemeMode) : 'auto'
}

export function useThemeMode() {
  const [mode, setModeState] = useState<ThemeMode>(readStoredMode)
  const [systemPrefersLight, setSystemPrefersLight] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-color-scheme: light)').matches
      : false,
  )

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mql = window.matchMedia('(prefers-color-scheme: light)')
    const listener = (e: MediaQueryListEvent) => setSystemPrefersLight(e.matches)
    mql.addEventListener('change', listener)
    return () => mql.removeEventListener('change', listener)
  }, [])

  const setMode = (next: ThemeMode) => {
    setModeState(next)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, next)
    }
  }

  const effectiveTheme: EffectiveTheme =
    mode === 'auto' ? (systemPrefersLight ? 'light' : 'dark') : mode

  return { mode, setMode, effectiveTheme }
}
