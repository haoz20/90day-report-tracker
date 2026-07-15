import type { ReactNode } from 'react'

interface CardProps {
  title?: string
  children: ReactNode
  className?: string
}

export function Card({ title, children, className = '' }: CardProps) {
  return (
    <section
      className={`mb-5 rounded-[20px] border border-black/8 bg-white/55 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.18)] backdrop-blur-xl backdrop-saturate-150 dark:border-white/12 dark:bg-white/6 ${className}`}
    >
      {title && (
        <h2 className="mb-4 text-xs font-semibold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}
