import { Card } from './Card'

interface DateInputsCardProps {
  entryDate: string
  dueDateInput: string
  onEntryDateChange: (value: string) => void
  onDueDateInputChange: (value: string) => void
  onClear: () => void
}

const inputClassName =
  'w-full rounded-[14px] border border-ink/12 bg-mist/60 px-3.5 py-3 font-sans text-sm text-ink outline-none dark:border-mist/15 dark:bg-slate/30 dark:text-mist'

const labelClassName =
  'text-xs font-semibold tracking-wide text-ink/60 uppercase dark:text-mist/60'

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
        <div className="flex flex-col gap-1.5">
          <label htmlFor="entryDate" className={labelClassName}>
            Date you entered Thailand
          </label>
          <input
            id="entryDate"
            type="date"
            value={entryDate}
            disabled={dueFilled}
            onChange={(e) => onEntryDateChange(e.target.value)}
            className={inputClassName}
          />
        </div>
        <div className="text-center text-xs font-semibold tracking-wider text-ink/60 uppercase dark:text-mist/60">
          or
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="dueDateInput" className={labelClassName}>
            Due date (from your TM.47 receipt)
          </label>
          <input
            id="dueDateInput"
            type="date"
            value={dueDateInput}
            disabled={entryFilled}
            onChange={(e) => onDueDateInputChange(e.target.value)}
            className={inputClassName}
          />
        </div>
      </div>
      <div className="mt-[18px] flex justify-end">
        <button
          type="button"
          onClick={onClear}
          className="rounded-xl border border-ink/12 px-[18px] py-2.5 font-sans text-[0.82rem] font-semibold text-ink/60 transition-colors hover:text-ink dark:border-mist/15 dark:text-mist/60 dark:hover:text-mist"
        >
          Clear
        </button>
      </div>
    </Card>
  )
}
