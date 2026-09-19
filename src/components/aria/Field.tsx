import {
  FieldError as AriaFieldError,
  type FieldErrorProps,
  Group,
  type GroupProps,
  Label as AriaLabel,
  type LabelProps,
  Text,
  type TextProps,
  type ValidationResult,
} from 'react-aria-components'
import { composeTailwindRenderProps } from './utils'

export function Label({ className, ...props }: Readonly<LabelProps>) {
  return (
    <AriaLabel
      {...props}
      className={`text-xs font-semibold tracking-wide text-ink/60 uppercase dark:text-mist/60 ${className ?? ''}`}
    />
  )
}

export function Description({ className, ...props }: Readonly<TextProps>) {
  return (
    <Text
      {...props}
      slot="description"
      className={`text-xs leading-relaxed text-ink/60 dark:text-mist/60 ${className ?? ''}`}
    />
  )
}

export function FieldError({
  errorMessage,
  ...props
}: Readonly<FieldErrorProps & { errorMessage?: string | ((validation: ValidationResult) => string) }>) {
  return (
    <AriaFieldError {...props} className="text-xs leading-relaxed text-[#d9574f]">
      {errorMessage}
    </AriaFieldError>
  )
}

export function FieldGroup(props: Readonly<GroupProps>) {
  return (
    <Group
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'flex h-11 items-center overflow-hidden rounded-[14px] border border-ink/12 bg-mist/60 text-ink transition-colors has-[:focus]:border-ink data-[disabled]:opacity-50 dark:border-mist/15 dark:bg-slate/30 dark:text-mist dark:has-[:focus]:border-mist',
      )}
    />
  )
}
