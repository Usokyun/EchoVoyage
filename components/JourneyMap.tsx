export type JourneyLandmark = {
  id: string
  text: string
  type: "word" | "phrase" | "grammar" | "expression" | "listening" | "culture"
  sourceSentence: string
  explanation: string
  difficulty: number
}

export type JourneyMapProps = {
  title: string
  description?: string
  landmarks: JourneyLandmark[]
}

export function JourneyMap({ title, description, landmarks }: JourneyMapProps) {
  return (
    <section
      id="journey"
      className="rounded-[2rem] border border-[color:var(--border)] bg-[var(--surface)] p-6 shadow-[0_24px_80px_rgba(22,38,28,0.08)] backdrop-blur md:p-8"
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
            Journey Map
          </p>
          <h2 className="mt-4 max-w-[11ch] text-4xl font-semibold tracking-[-0.05em] text-balance md:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 max-w-[34rem] text-base leading-7 text-[var(--muted)]">
              {description}
            </p>
          ) : null}
        </div>

        <div className="relative">
          <div className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-[var(--border)] md:block" />
          <ol className="space-y-4">
            {landmarks.map((landmark, index) => (
              <li
                key={landmark.id}
                className="relative rounded-[1.5rem] border border-[color:var(--border)] bg-[rgba(255,250,240,0.78)] p-5 transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--surface-strong)] md:ml-10"
              >
                <div className="absolute -left-[3.25rem] top-6 hidden h-8 w-8 place-items-center rounded-full border border-[color:var(--border)] bg-[var(--surface-strong)] font-mono text-xs text-[var(--accent)] md:grid">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--accent)]">
                    {landmark.type}
                  </span>
                  <span className="font-mono text-xs text-[var(--muted)]">
                    difficulty {landmark.difficulty}/5
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em]">
                  {landmark.text}
                </h3>
                <p className="mt-3 border-l border-[color:var(--border)] pl-4 text-sm leading-6 text-[var(--muted)]">
                  "{landmark.sourceSentence}"
                </p>
                <p className="mt-4 text-sm leading-6 text-[var(--foreground)]">
                  {landmark.explanation}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
