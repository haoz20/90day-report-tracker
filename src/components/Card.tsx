import type { ReactNode } from 'react'

interface CardProps {
  title?: string
  children: ReactNode
  className?: string
}

export function Card({ title, children, className = '' }: CardProps) {
  return (
    <section
      className={`mb-5 rounded-[20px] border border-ink/8 bg-mist/55 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.18)] backdrop-blur-xl backdrop-saturate-150 dark:border-mist/12 dark:bg-slate/40 ${className}`}
    >
      {title && (
        <h2 className="mb-4 text-xs font-semibold tracking-wider text-ink/60 uppercase dark:text-mist/60">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}
