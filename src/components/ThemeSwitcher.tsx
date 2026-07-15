import type { ThemeMode } from '../hooks/useThemeMode'

const OPTIONS: ThemeMode[] = ['auto', 'light', 'dark']

interface ThemeSwitcherProps {
  mode: ThemeMode
  onChange: (mode: ThemeMode) => void
}

export function ThemeSwitcher({ mode, onChange }: ThemeSwitcherProps) {
  return (
    <div className="absolute top-0 right-0 flex gap-1 rounded-full border border-black/8 bg-white/55 p-1 backdrop-blur-xl backdrop-saturate-150 dark:border-white/12 dark:bg-white/6">
      {OPTIONS.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`rounded-full px-3 py-1.5 font-sans text-xs font-semibold capitalize transition-colors ${
            mode === option
              ? 'bg-[#00ADB5] text-[#071012]'
              : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
