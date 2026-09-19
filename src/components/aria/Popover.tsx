import { Popover as AriaPopover, type PopoverProps } from 'react-aria-components'
import { composeTailwindRenderProps } from './utils'

export function Popover(props: Readonly<PopoverProps>) {
  return (
    <AriaPopover
      {...props}
      offset={8}
      className={composeTailwindRenderProps(
        props.className,
        'rounded-[18px] border border-ink/8 bg-mist/90 p-3 text-ink shadow-[0_12px_28px_rgba(0,0,0,0.22)] backdrop-blur-xl backdrop-saturate-150 outline-none dark:border-mist/12 dark:bg-slate/90 dark:text-mist',
      )}
    />
  )
}
