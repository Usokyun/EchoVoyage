export type AgentPersona =
  | "gentle-guide"
  | "strict-mentor"
  | "mischievous-bard"
  | "brave-companion"
  | "silent-scholar"

export type AgentPersonaPickerProps = {
  selectedPersona?: AgentPersona
}

const personas: Array<{
  id: AgentPersona
  name: string
  description: string
}> = [
  {
    id: "gentle-guide",
    name: "Gentle Guide",
    description: "Soft feedback, patient hints, and slow returns.",
  },
  {
    id: "strict-mentor",
    name: "Strict Mentor",
    description: "Sharper corrections and a clear path to mastery.",
  },
  {
    id: "mischievous-bard",
    name: "Mischievous Bard",
    description: "Playful scenes, surprising prompts, and story turns.",
  },
  {
    id: "brave-companion",
    name: "Brave Companion",
    description: "Adventure language for learners who like momentum.",
  },
  {
    id: "silent-scholar",
    name: "Silent Scholar",
    description: "Minimal words, careful notes, and quiet precision.",
  },
]

export function AgentPersonaPicker({
  selectedPersona = "gentle-guide",
}: AgentPersonaPickerProps) {
  return (
    <section className="rounded-[2rem] border border-[color:var(--border)] bg-[var(--surface)] p-6 backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
            Companion
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
            Choose an Agent persona
          </h2>
        </div>
        <span className="rounded-full border border-[color:var(--border)] px-3 py-1 font-mono text-xs text-[var(--muted)]">
          static
        </span>
      </div>

      <div className="mt-6 grid gap-3">
        {personas.map((persona) => {
          const isSelected = persona.id === selectedPersona

          return (
            <button
              key={persona.id}
              type="button"
              className={`rounded-[1.25rem] border p-4 text-left transition duration-300 ${
                isSelected
                  ? "border-[var(--accent)] bg-[var(--accent-soft)]"
                  : "border-[color:var(--border)] bg-[rgba(255,250,240,0.55)] hover:border-[var(--accent)]/40"
              }`}
            >
              <span className="block text-base font-semibold">
                {persona.name}
              </span>
              <span className="mt-1 block text-sm leading-6 text-[var(--muted)]">
                {persona.description}
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
