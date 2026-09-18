import type { ReactNode } from 'react'

interface CardProps {
  title?: string
  children: ReactNode
  className?: string
}

export function Card({ title, children, className = '' }: CardProps) {
  return (
    <section
      className={`mb-5 rounded-[20px] border border-ink/18 bg-surface-light p-6 dark:border-teal/18 dark:bg-surface-dark ${className}`}
    >
      {title && (
        <h2 className="mb-4 text-xs font-semibold tracking-wider text-muted-light uppercase dark:text-muted-dark">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}
