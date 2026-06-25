import { useTranslations } from "next-intl"

export type CorpusInputProps = {
  title?: string
  rawText?: string
  language?: string
}

export function CorpusInput({
  title = "",
  rawText = "",
  language = "English",
}: CorpusInputProps) {
  const t = useTranslations("CorpusInput")

  return (
    <section
      id="corpus"
      className="rounded-[2rem] border border-[color:var(--border)] bg-[var(--surface-strong)] p-6 shadow-[0_18px_70px_rgba(22,38,28,0.08)]"
    >
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

      <div className="mt-6 grid gap-4">
        <label className="grid gap-2">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            {t("titleLabel")}
          </span>
          <input
            className="rounded-2xl border border-[color:var(--border)] bg-white/60 px-4 py-3 text-sm outline-none transition focus:border-[var(--accent)]"
            defaultValue={title}
            placeholder={t("titlePlaceholder")}
            readOnly
          />
        </label>

        <label className="grid gap-2">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            {t("rawLabel")}
          </span>
          <textarea
            className="min-h-44 resize-none rounded-2xl border border-[color:var(--border)] bg-white/60 px-4 py-3 text-sm leading-7 outline-none transition focus:border-[var(--accent)]"
            defaultValue={rawText}
            placeholder={t("rawPlaceholder")}
            readOnly
          />
        </label>

        <label className="grid gap-2">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            {t("languageLabel")}
          </span>
          <input
            className="rounded-2xl border border-[color:var(--border)] bg-white/60 px-4 py-3 text-sm outline-none transition focus:border-[var(--accent)]"
            defaultValue={language}
            readOnly
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="button"
          disabled
          className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white opacity-80"
        >
          {t("cta")}
        </button>
        <p className="text-sm leading-6 text-[var(--muted)]">
          {t("note")}
        </p>
      </div>
    </section>
  )
}
