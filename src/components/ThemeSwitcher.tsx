import type { ThemeMode } from '../hooks/useThemeMode'

const OPTIONS: ThemeMode[] = ['auto', 'light', 'dark']

interface ThemeSwitcherProps {
  mode: ThemeMode
  onChange: (mode: ThemeMode) => void
}

export function ThemeSwitcher({ mode, onChange }: ThemeSwitcherProps) {
  return (
    <div className="absolute top-0 right-0 flex gap-1 rounded-full border border-ink/18 bg-surface-light p-1 dark:border-teal/18 dark:bg-surface-dark">
      {OPTIONS.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`rounded-full px-3 py-1.5 font-sans text-xs font-semibold capitalize transition-colors ${
            mode === option
              ? 'bg-ink text-teal dark:bg-teal dark:text-ink'
              : 'text-ink/75 hover:text-ink dark:text-teal/75 dark:hover:text-teal'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
