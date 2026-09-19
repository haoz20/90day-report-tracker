import type { ReportStatus } from '../lib/reportStatus'
import { TONE_COLORS } from '../lib/reportStatus'

interface StatusBannerProps {
  status: ReportStatus
}

export function StatusBanner({ status }: StatusBannerProps) {
  const color = TONE_COLORS[status.tone]

  return (
    <div
      role="status"
      className="mb-5 rounded-2xl border p-4 text-sm leading-relaxed"
      style={{
        borderColor: color,
        background: `color-mix(in srgb, ${color} ${status.tone === 'due' ? 18 : 12}%, transparent)`,
      }}
    >
      {status.message}
    </div>
  )
}
