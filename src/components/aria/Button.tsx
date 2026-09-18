import { Button as AriaButton, type ButtonProps } from 'react-aria-components'
import { composeTailwindRenderProps } from './utils'

export function FieldButton(props: Readonly<ButtonProps>) {
  return (
    <AriaButton
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] text-ink/75 outline-none transition-colors hover:bg-ink/10 hover:text-ink data-[pressed]:bg-ink/15 focus-visible:ring-2 focus-visible:ring-ink/50 dark:text-teal/75 dark:hover:bg-teal/10 dark:hover:text-teal dark:data-[pressed]:bg-teal/15 dark:focus-visible:ring-teal/50',
      )}
    />
  )
}

export function CalendarNavButton(props: Readonly<ButtonProps>) {
  return (
    <AriaButton
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'flex h-8 w-8 items-center justify-center rounded-full text-ink/75 outline-none transition-colors hover:bg-ink/10 hover:text-ink data-[pressed]:bg-ink/15 disabled:pointer-events-none disabled:opacity-30 focus-visible:ring-2 focus-visible:ring-ink/50 dark:text-teal/75 dark:hover:bg-teal/10 dark:hover:text-teal dark:data-[pressed]:bg-teal/15 dark:focus-visible:ring-teal/50',
      )}
    />
  )
}
