import { addDays, daysBetween, formatDate } from './date'

export type ReportTone = 'early' | 'ontime' | 'due' | 'late' | 'overdue'

export interface ReportStatus {
  tone: ReportTone
  message: string
}

export interface ReportWindow {
  dueDate: Date
  earlyOpen: Date
  lateEnd: Date
}

const EARLY_WINDOW_DAYS = 15
const LATE_WINDOW_DAYS = 7
const REPORT_CYCLE_DAYS = 90

export const TONE_COLORS: Record<ReportTone, string> = {
  early: '#00ADB5',
  ontime: '#4fbf8f',
  due: '#4fbf8f',
  late: '#e8a33d',
  overdue: '#d9574f',
}

export function computeDueDate(entryDate: Date | null, dueDateInput: Date | null): Date | null {
  if (entryDate) return addDays(entryDate, REPORT_CYCLE_DAYS)
  if (dueDateInput) return dueDateInput
  return null
}

export function computeReportWindow(dueDate: Date | null): ReportWindow | null {
  if (!dueDate) return null
  return {
    dueDate,
    earlyOpen: addDays(dueDate, -EARLY_WINDOW_DAYS),
    lateEnd: addDays(dueDate, LATE_WINDOW_DAYS),
  }
}

export function computeReportStatus(window: ReportWindow | null, now: Date): ReportStatus | null {
  if (!window) return null
  const { dueDate, earlyOpen, lateEnd } = window

  const dEarly = daysBetween(now, earlyOpen)
  const dDue = daysBetween(now, dueDate)
  const dLateEnd = daysBetween(now, lateEnd)

  if (dEarly > 0) {
    return {
      tone: 'early',
      message: `🕓 Too early to file yet — early window opens in ${dEarly} day${dEarly === 1 ? '' : 's'} (${formatDate(earlyOpen)}).`,
    }
  }
  if (dDue > 0) {
    return {
      tone: 'ontime',
      message: `✅ You're in the early filing window — ${dDue} day${dDue === 1 ? '' : 's'} left until the due date.`,
    }
  }
  if (dDue === 0) {
    return {
      tone: 'due',
      message: `📌 Today is your due date — file today to stay on time.`,
    }
  }
  if (dLateEnd >= 0) {
    const daysLate = -dDue
    return {
      tone: 'late',
      message: `⚠️ You're ${daysLate} day${daysLate === 1 ? '' : 's'} late — a fine likely applies. ${dLateEnd} day${dLateEnd === 1 ? '' : 's'} left in the late-filing window.`,
    }
  }
  const daysOverdue = -dLateEnd
  return {
    tone: 'overdue',
    message: `🚨 You're past the 7-day late window by ${daysOverdue} day${daysOverdue === 1 ? '' : 's'} — visit Immigration as soon as possible.`,
  }
}
