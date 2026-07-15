interface ResultBoxProps {
  label: string
  date: string
  color: string
}

export function ResultBox({ label, date, color }: ResultBoxProps) {
  return (
    <div className="rounded-[14px] border border-black/12 bg-white/60 px-2.5 py-3.5 text-center dark:border-white/15 dark:bg-white/5">
      <div className="mb-2 text-[0.68rem] font-semibold tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
        {label}
      </div>
      <div className="text-[1.05rem] font-semibold" style={{ color }}>
        {date}
      </div>
    </div>
  )
}
