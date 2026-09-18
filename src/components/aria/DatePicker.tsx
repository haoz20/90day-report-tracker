import {
  DatePicker as AriaDatePicker,
  type DatePickerProps as AriaDatePickerProps,
  type DateValue,
  type ValidationResult,
} from 'react-aria-components'
import { Calendar } from './Calendar'
import { DateInput } from './DateField'
import { Description, FieldError, FieldGroup, Label } from './Field'
import { FieldButton } from './Button'
import { ChevronDownIcon } from './Icons'
import { Popover } from './Popover'
import { composeTailwindRenderProps } from './utils'

export interface DatePickerProps<T extends DateValue> extends AriaDatePickerProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

/**
 * Shareable date picker built on react-aria-components. Drop it in anywhere a
 * calendar-backed date field is needed — styling lives entirely in this
 * folder's theme tokens (`--color-teal` / `--color-ink`), so it stays in sync
 * with the app's light/dark palette automatically.
 */
export function DatePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: Readonly<DatePickerProps<T>>) {
  return (
    <AriaDatePicker
      {...props}
      className={composeTailwindRenderProps(props.className, 'group flex flex-col gap-1.5 font-sans')}
    >
      {label && <Label>{label}</Label>}
      <FieldGroup>
        <DateInput className="flex-1" />
        <FieldButton className="mr-1">
          <ChevronDownIcon className="h-4 w-4 transition-transform group-data-[open]:rotate-180" />
        </FieldButton>
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError errorMessage={errorMessage} />
      <Popover>
        <Calendar />
      </Popover>
    </AriaDatePicker>
  )
}
