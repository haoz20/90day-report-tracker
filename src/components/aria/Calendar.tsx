import {
  Calendar as AriaCalendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  type CalendarProps,
  CalendarHeaderCell,
  type DateValue,
  Heading,
} from 'react-aria-components'
import { CalendarNavButton } from './Button'
import { ChevronLeftIcon, ChevronRightIcon } from './Icons'
import { composeTailwindRenderProps } from './utils'

const cellClassName = [
  'flex h-9 w-9 cursor-default items-center justify-center rounded-full text-sm tabular-nums text-ink outline-none',
  'data-[hovered]:bg-ink/10',
  'data-[outside-month]:text-ink/30',
  'data-[disabled]:pointer-events-none data-[disabled]:opacity-30',
  'data-[unavailable]:pointer-events-none data-[unavailable]:text-ink/30 data-[unavailable]:line-through',
  "[&[data-today]:not([data-selected])]:ring-1 [&[data-today]:not([data-selected])]:ring-ink/40",
  'data-[selected]:bg-ink data-[selected]:font-semibold data-[selected]:text-teal',
  'data-[focus-visible]:ring-2 data-[focus-visible]:ring-ink data-[focus-visible]:ring-offset-2 data-[focus-visible]:ring-offset-surface-light',
  'dark:text-teal dark:data-[hovered]:bg-teal/10 dark:data-[outside-month]:text-teal/30',
  'dark:data-[unavailable]:text-teal/30',
  "dark:[&[data-today]:not([data-selected])]:ring-teal/40",
  'dark:data-[selected]:bg-teal dark:data-[selected]:text-ink',
  'dark:data-[focus-visible]:ring-teal dark:data-[focus-visible]:ring-offset-surface-dark',
].join(' ')

export function Calendar<T extends DateValue>(props: Readonly<CalendarProps<T>>) {
  return (
    <AriaCalendar
      {...props}
      className={composeTailwindRenderProps(props.className, 'w-[272px]')}
    >
      <header className="mb-3 flex items-center justify-between px-1">
        <CalendarNavButton slot="previous">
          <ChevronLeftIcon className="h-4 w-4" />
        </CalendarNavButton>
        <Heading className="text-sm font-semibold text-ink dark:text-teal" />
        <CalendarNavButton slot="next">
          <ChevronRightIcon className="h-4 w-4" />
        </CalendarNavButton>
      </header>
      <CalendarGrid className="w-full border-collapse">
        <CalendarGridHeader>
          {(day) => (
            <CalendarHeaderCell className="pb-2 text-xs font-semibold text-muted-light dark:text-muted-dark">
              {day}
            </CalendarHeaderCell>
          )}
        </CalendarGridHeader>
        <CalendarGridBody>
          {(date) => <CalendarCell date={date} className={cellClassName} />}
        </CalendarGridBody>
      </CalendarGrid>
    </AriaCalendar>
  )
}
