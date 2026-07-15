import { Card } from './Card'
import { ResultBox } from './ResultBox'
import { formatDate } from '../lib/date'
import type { ReportWindow } from '../lib/reportStatus'
import { TONE_COLORS } from '../lib/reportStatus'

interface KeyDatesCardProps {
  window: ReportWindow
}

export function KeyDatesCard({ window }: KeyDatesCardProps) {
  return (
    <Card title="Key dates">
      <div className="grid grid-cols-3 gap-3">
        <ResultBox label="Early filing opens" date={formatDate(window.earlyOpen)} color={TONE_COLORS.early} />
        <ResultBox label="Due date" date={formatDate(window.dueDate)} color={TONE_COLORS.ontime} />
        <ResultBox label="Late window ends" date={formatDate(window.lateEnd)} color={TONE_COLORS.late} />
      </div>
    </Card>
  )
}
