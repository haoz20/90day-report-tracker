import { Card } from './Card'

const RULES = [
  'Required for foreigners on long-term (non-immigrant) visas staying in Thailand.',
  'You can file up to 15 days early — the next cycle resets from the original due date, not the filing date.',
  'You can file up to 7 days late, but a 1,000 THB fine applies.',
  'Filing more than 7 days late can lead to higher fines and complications.',
  'Leaving and re-entering Thailand resets the 90-day count from your re-entry date.',
  'You can file online, by mail, or in person at your local Immigration Office.',
]

export function RulesCard() {
  return (
    <Card title="Rules of the 90-day report">
      <ul className="m-0 list-disc space-y-1 pl-4.5 text-[0.88rem] leading-relaxed text-neutral-800 dark:text-neutral-100">
        {RULES.map((rule) => (
          <li key={rule}>{rule}</li>
        ))}
      </ul>
      <p className="mt-4 border-t border-black/8 pt-3.5 text-xs leading-relaxed text-neutral-500 italic dark:border-white/12 dark:text-neutral-400">
        This is a planning tool only — always confirm your exact due date on your TM.47 receipt.
      </p>
    </Card>
  )
}
