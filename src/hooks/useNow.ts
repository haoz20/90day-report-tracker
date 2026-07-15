import { useEffect, useState } from 'react'

export function useNow(intervalMs = 60 * 1000): Date {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), intervalMs)
    return () => clearInterval(id)
  }, [intervalMs])

  return now
}
