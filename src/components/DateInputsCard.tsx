import { parseDate } from '@internationalized/date'
import { Card } from './Card'
import { DatePicker } from './aria/DatePicker'

interface DateInputsCardProps {
  entryDate: string
  dueDateInput: string
  onEntryDateChange: (value: string) => void
  onDueDateInputChange: (value: string) => void
  onClear: () => void
}

export function DateInputsCard({
  entryDate,
  dueDateInput,
  onEntryDateChange,
  onDueDateInputChange,
  onClear,
}: Readonly<DateInputsCardProps>) {
  const entryFilled = !!entryDate
  const dueFilled = !!dueDateInput

  return (
    <Card title="Your dates">
      <div className="flex flex-col gap-3.5">
        <DatePicker
          label="Date you entered Thailand"
          value={entryDate ? parseDate(entryDate) : null}
          onChange={(date) => onEntryDateChange(date ? date.toString() : '')}
          isDisabled={dueFilled}
        />
        <div className="text-center text-xs font-semibold tracking-wider text-muted-light uppercase dark:text-muted-dark">
          or
        </div>
        <DatePicker
          label="Due date (from your TM.47 receipt)"
          value={dueDateInput ? parseDate(dueDateInput) : null}
          onChange={(date) => onDueDateInputChange(date ? date.toString() : '')}
          isDisabled={entryFilled}
        />
      </div>
      <div className="mt-[18px] flex justify-end">
        <button
          type="button"
          onClick={onClear}
          className="rounded-xl border border-ink/18 px-[18px] py-2.5 font-sans text-[0.82rem] font-semibold text-ink/75 transition-colors hover:text-ink dark:border-teal/18 dark:text-teal/75 dark:hover:text-teal"
        >
          Clear
        </button>
      </div>
    </Card>
  )
}
