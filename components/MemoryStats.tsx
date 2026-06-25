export type MemoryStatsProps = {
  masteryScore?: number
  dueEchoCount?: number
  weakLandmarks?: string[]
  nextReturns?: string[]
}

export function MemoryStats({
  masteryScore = 0,
  dueEchoCount = 0,
  weakLandmarks = [],
  nextReturns = [],
}: MemoryStatsProps) {
  return (
    <section
      id="echoes"
      className="rounded-[2rem] border border-[color:var(--border)] bg-[var(--surface)] p-6 md:p-8"
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
            Today's Echoes
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-balance md:text-5xl">
            Places waiting for a return.
          </h2>
          <p className="mt-5 max-w-[34rem] text-base leading-7 text-[var(--muted)]">
            Memory is a trail. EchoVoyage will eventually bring back landmarks
            as they begin to fade.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[1.5rem] border border-[color:var(--border)] bg-[var(--surface-strong)] p-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Mastery
            </p>
            <p className="mt-4 text-5xl font-semibold tracking-[-0.06em]">
              {masteryScore}
              <span className="text-xl text-[var(--muted)]">%</span>
            </p>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Static preview score for the first voyage.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-[color:var(--border)] bg-[var(--surface-strong)] p-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Echoes waiting
            </p>
            <p className="mt-4 text-5xl font-semibold tracking-[-0.06em]">
              {dueEchoCount}
            </p>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Landmarks scheduled for a future revisit.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-[color:var(--border)] bg-[var(--surface-strong)] p-5 md:col-span-2">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Memory trail
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {weakLandmarks.map((landmark) => (
                <span
                  key={landmark}
                  className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-sm text-[var(--accent)]"
                >
                  {landmark}
                </span>
              ))}
            </div>
            <ul className="mt-5 space-y-3">
              {nextReturns.map((item) => (
                <li
                  key={item}
                  className="border-l border-[color:var(--border)] pl-4 text-sm leading-6 text-[var(--muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
