import { useTranslations } from "next-intl"

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
}> = [
  { id: "gentle-guide" },
  { id: "strict-mentor" },
  { id: "mischievous-bard" },
  { id: "brave-companion" },
  { id: "silent-scholar" },
]

export function AgentPersonaPicker({
  selectedPersona = "gentle-guide",
}: AgentPersonaPickerProps) {
  const t = useTranslations("AgentPersonaPicker")

  return (
    <section className="rounded-[2rem] border border-[color:var(--border)] bg-[var(--surface)] p-6 backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
            {t("kicker")}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
            {t("heading")}
          </h2>
        </div>
        <span className="rounded-full border border-[color:var(--border)] px-3 py-1 font-mono text-xs text-[var(--muted)]">
          {t("status")}
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
                {t(`personas.${persona.id}.name`)}
              </span>
              <span className="mt-1 block text-sm leading-6 text-[var(--muted)]">
                {t(`personas.${persona.id}.description`)}
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
