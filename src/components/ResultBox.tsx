import type { ReportTone } from '../lib/reportStatus'

interface ResultBoxProps {
  label: string
  date: string
  tone: ReportTone
}

export function ResultBox({ label, date, tone }: ResultBoxProps) {
  return (
    <div className="rounded-[14px] border border-ink/18 bg-surface-light px-2.5 py-3.5 text-center dark:border-teal/18 dark:bg-surface-dark">
      <div className="mb-2 text-[0.68rem] font-semibold tracking-wide text-muted-light uppercase dark:text-muted-dark">
        {label}
      </div>
      <div className="text-[1.05rem] font-semibold" style={{ color: `var(--tone-${tone}-text)` }}>
        {date}
      </div>
    </div>
  )
}
