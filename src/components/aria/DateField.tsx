import {
  DateInput as AriaDateInput,
  type DateInputProps,
  DateSegment as AriaDateSegment,
  type DateSegmentProps,
} from 'react-aria-components'
import { composeTailwindRenderProps } from './utils'

export function DateInput(props: Readonly<Omit<DateInputProps, 'children'>>) {
  return (
    <AriaDateInput
      {...props}
      className={composeTailwindRenderProps(props.className, 'flex items-center px-3.5 text-sm')}
    >
      {(segment) => <DateSegment segment={segment} />}
    </AriaDateInput>
  )
}

function DateSegment({ segment }: Readonly<{ segment: DateSegmentProps['segment'] }>) {
  return (
    <AriaDateSegment
      segment={segment}
      className="rounded-sm px-0.5 tabular-nums text-ink outline-none data-[placeholder]:text-ink/40 data-[focused]:bg-accent data-[focused]:text-ink data-[focused]:data-[placeholder]:text-ink data-[type=literal]:px-0 dark:text-mist dark:data-[placeholder]:text-mist/40 dark:data-[focused]:bg-accent dark:data-[focused]:text-ink dark:data-[focused]:data-[placeholder]:text-ink"
    />
  )
}
