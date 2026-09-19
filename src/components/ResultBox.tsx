interface ResultBoxProps {
  label: string
  date: string
  color: string
}

export function ResultBox({ label, date, color }: ResultBoxProps) {
  return (
    <div className="rounded-[14px] border border-ink/12 bg-mist/60 px-2.5 py-3.5 text-center dark:border-mist/15 dark:bg-slate/30">
      <div className="mb-2 text-[0.68rem] font-semibold tracking-wide text-ink/60 uppercase dark:text-mist/60">
        {label}
      </div>
      <div className="text-[1.05rem] font-semibold" style={{ color }}>
        {date}
      </div>
    </div>
  )
}
