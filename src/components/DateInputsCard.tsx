import { Card } from './Card'

interface DateInputsCardProps {
  entryDate: string
  dueDateInput: string
  onEntryDateChange: (value: string) => void
  onDueDateInputChange: (value: string) => void
  onClear: () => void
}

const inputClassName =
  'w-full rounded-[14px] border border-black/12 bg-white/60 px-3.5 py-3 font-sans text-sm text-neutral-900 outline-none dark:border-white/15 dark:bg-white/5 dark:text-neutral-100'

const labelClassName =
  'text-xs font-semibold tracking-wide text-neutral-500 uppercase dark:text-neutral-400'

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
        <div className="text-center text-xs font-semibold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
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
          className="rounded-xl border border-black/12 px-[18px] py-2.5 font-sans text-[0.82rem] font-semibold text-neutral-500 transition-colors hover:text-neutral-700 dark:border-white/15 dark:text-neutral-400 dark:hover:text-neutral-200"
        >
          Clear
        </button>
      </div>
    </Card>
  )
}
