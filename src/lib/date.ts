const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
] as const

export function parseLocalDate(str: string): Date | null {
  if (!str) return null
  const [y, m, d] = str.split('-').map(Number)
  return new Date(y, m - 1, d)
}

export function addDays(date: Date, days: number): Date {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d
}

export function startOfDay(date: Date): Date {
  const d = new Date(date)
  d.setHours(0, 0, 0, 0)
  return d
}

export function daysBetween(a: Date, b: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24
  return Math.round((startOfDay(b).getTime() - startOfDay(a).getTime()) / msPerDay)
}

export function formatDate(date: Date | null): string {
  if (!date) return '–'
  return `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`
}
