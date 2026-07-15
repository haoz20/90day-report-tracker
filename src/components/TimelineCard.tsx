import { Card } from './Card'
import { formatDate } from '../lib/date'
import type { ReportWindow } from '../lib/reportStatus'
import { TONE_COLORS } from '../lib/reportStatus'

interface TimelineCardProps {
  window: ReportWindow
}

interface TimelineLabelProps {
  align: 'flex-start' | 'center' | 'flex-end'
  date: string
  label: string
}

function TimelineLabel({ align, date, label }: TimelineLabelProps) {
  return (
    <div className="flex flex-1 flex-col gap-1" style={{ alignItems: align }}>
      <span className="text-[0.78rem] font-semibold text-neutral-800 dark:text-neutral-100">{date}</span>
      <span>{label}</span>
    </div>
  )
}

function LegendItem({ color, text }: { color: string; text: string }) {
  return (
    <span>
      <span
        className="mr-1.5 inline-block h-2.5 w-2.5 rounded-full align-middle"
        style={{ background: color }}
      />
      {text}
    </span>
  )
}

export function TimelineCard({ window }: TimelineCardProps) {
  return (
    <Card title="Timeline">
      <div
        aria-hidden="true"
        className="relative my-[34px] mb-[18px] flex h-3.5 overflow-hidden rounded-full"
      >
        <div className="h-full" style={{ background: TONE_COLORS.early, flex: 15 }} />
        <div className="h-full" style={{ background: TONE_COLORS.ontime, flex: 8 }} />
        <div className="h-full" style={{ background: TONE_COLORS.late, flex: 7 }} />
      </div>
      <div className="-mt-2 flex justify-between text-xs text-neutral-500 dark:text-neutral-400">
        <TimelineLabel align="flex-start" date={formatDate(window.earlyOpen)} label="Early opens" />
        <TimelineLabel align="center" date={formatDate(window.dueDate)} label="Due date" />
        <TimelineLabel align="flex-end" date={formatDate(window.lateEnd)} label="Late ends" />
      </div>
      <div className="mt-5 flex flex-wrap gap-3.5 text-[0.78rem] text-neutral-500 dark:text-neutral-400">
        <LegendItem color={TONE_COLORS.early} text="Early window (15 days)" />
        <LegendItem color={TONE_COLORS.ontime} text="On time" />
        <LegendItem color={TONE_COLORS.late} text="Late window (7 days, fine applies)" />
      </div>
    </Card>
  )
}
