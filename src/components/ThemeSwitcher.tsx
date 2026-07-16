import type { ThemeMode } from '../hooks/useThemeMode'

const OPTIONS: ThemeMode[] = ['auto', 'light', 'dark']

interface ThemeSwitcherProps {
  mode: ThemeMode
  onChange: (mode: ThemeMode) => void
}

export function ThemeSwitcher({ mode, onChange }: ThemeSwitcherProps) {
  return (
    <div className="absolute top-0 right-0 flex gap-1 rounded-full border border-ink/8 bg-mist/55 p-1 backdrop-blur-xl backdrop-saturate-150 dark:border-mist/12 dark:bg-slate/40">
      {OPTIONS.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`rounded-full px-3 py-1.5 font-sans text-xs font-semibold capitalize transition-colors ${
            mode === option
              ? 'bg-accent text-ink'
              : 'text-ink/60 hover:text-ink dark:text-mist/60 dark:hover:text-mist'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
