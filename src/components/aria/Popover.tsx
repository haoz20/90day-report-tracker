import { Popover as AriaPopover, type PopoverProps } from 'react-aria-components'
import { composeTailwindRenderProps } from './utils'

export function Popover(props: Readonly<PopoverProps>) {
  return (
    <AriaPopover
      {...props}
      offset={8}
      className={composeTailwindRenderProps(
        props.className,
        'rounded-[18px] border border-ink/18 bg-surface-light p-3 text-ink shadow-[0_12px_28px_rgba(0,0,0,0.22)] outline-none dark:border-teal/18 dark:bg-surface-dark dark:text-teal',
      )}
    />
  )
}
