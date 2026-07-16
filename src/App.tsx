import { useCallback, useMemo, useState } from 'react'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import { DateInputsCard } from './components/DateInputsCard'
import { StatusBanner } from './components/StatusBanner'
import { KeyDatesCard } from './components/KeyDatesCard'
import { TimelineCard } from './components/TimelineCard'
import { RulesCard } from './components/RulesCard'
import { useThemeMode } from './hooks/useThemeMode'
import { useNow } from './hooks/useNow'
import { parseLocalDate } from './lib/date'
import { computeDueDate, computeReportWindow, computeReportStatus } from './lib/reportStatus'

function App() {
  const { mode, setModeState, effectiveTheme } = useThemeMode()
  const now = useNow()
  const [entryDate, setEntryDate] = useState('')
  const [dueDateInput, setDueDateInput] = useState('')

  const reportWindow = useMemo(() => {
    const dueDate = computeDueDate(parseLocalDate(entryDate), parseLocalDate(dueDateInput))
    return computeReportWindow(dueDate)
  }, [entryDate, dueDateInput])

  const status = useMemo(() => computeReportStatus(reportWindow, now), [reportWindow, now])

  const handleClear = useCallback(() => {
    setEntryDate('')
    setDueDateInput('')
  }, [])

  return (
    <div
      className={effectiveTheme === 'dark' ? 'dark' : ''}
      style={{ colorScheme: effectiveTheme }}
    >
      <div className="min-h-screen w-full bg-[radial-gradient(circle_at_20%_0%,#EEEEEE,#dfe6e8_70%)] px-5 pt-8 pb-[60px] font-sans text-neutral-900 antialiased transition-colors dark:bg-[radial-gradient(circle_at_20%_0%,#171b22,#222831_70%)] dark:text-neutral-100">
        <div className="relative mx-auto max-w-[620px]">
          <ThemeSwitcher mode={mode} onChange={setModeState} />

          <header className="mb-7 pt-14 text-center">
            <h1 className="mb-2 text-2xl font-semibold tracking-tight">Thailand 90-Day Report Tracker</h1>
            <p className="m-0 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              Calculate and track your Thailand 90-day address reporting deadline.
            </p>
          </header>

          <DateInputsCard
            entryDate={entryDate}
            dueDateInput={dueDateInput}
            onEntryDateChange={setEntryDate}
            onDueDateInputChange={setDueDateInput}
            onClear={handleClear}
          />

          {status && <StatusBanner status={status} />}

          {reportWindow && (
            <>
              <KeyDatesCard window={reportWindow} />
              <TimelineCard window={reportWindow} />
            </>
          )}

          <RulesCard />
        </div>
      </div>
    </div>
  )
}

export default App
