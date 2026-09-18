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
      className={`text-xs font-semibold tracking-wide text-muted-light uppercase dark:text-muted-dark ${className ?? ''}`}
    />
  )
}

export function Description({ className, ...props }: Readonly<TextProps>) {
  return (
    <Text
      {...props}
      slot="description"
      className={`text-xs leading-relaxed text-muted-light dark:text-muted-dark ${className ?? ''}`}
    />
  )
}

export function FieldError({
  errorMessage,
  ...props
}: Readonly<FieldErrorProps & { errorMessage?: string | ((validation: ValidationResult) => string) }>) {
  return (
    <AriaFieldError {...props} className="text-xs leading-relaxed text-[color:var(--tone-overdue-text)]">
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
        'flex h-11 items-center overflow-hidden rounded-[14px] border border-ink/18 bg-surface-light text-ink transition-colors has-[:focus]:border-ink data-[disabled]:opacity-50 dark:border-teal/18 dark:bg-surface-dark dark:text-teal dark:has-[:focus]:border-teal',
      )}
    />
  )
}
