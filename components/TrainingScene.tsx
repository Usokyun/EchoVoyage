import { useTranslations } from "next-intl"

export type TrainingSceneProps = {
  title: string
  prompt: string
  targetLandmarkIds: string[]
  userResponse?: string
  feedback?: string
}

export function TrainingScene({
  title,
  prompt,
  targetLandmarkIds,
  userResponse,
  feedback,
}: TrainingSceneProps) {
  const t = useTranslations("TrainingScene")

  return (
    <section
      id="scene"
      className="rounded-[2rem] border border-[color:var(--border)] bg-[#17221d] p-6 text-[#f7f2e8] shadow-[0_28px_90px_rgba(23,34,29,0.24)] md:p-8"
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#9bc7ad]">
            {t("kicker")}
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-balance md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-[32rem] text-base leading-7 text-[#c7d5ca]">
            {t("description")}
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#9bc7ad]">
              {t("promptLabel")}
            </p>
            <p className="mt-3 text-lg leading-8">{prompt}</p>
          </div>

          {userResponse ? (
            <div className="ml-auto max-w-[90%] rounded-[1.5rem] border border-white/10 bg-[#f7f2e8] p-5 text-[#17221d]">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                {t("responseLabel")}
              </p>
              <p className="mt-3 leading-7">{userResponse}</p>
            </div>
          ) : null}

          {feedback ? (
            <div className="rounded-[1.5rem] border border-[#9bc7ad]/30 bg-[#9bc7ad]/10 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#9bc7ad]">
                {t("feedbackLabel")}
              </p>
              <p className="mt-3 leading-7 text-[#ecf3ed]">{feedback}</p>
            </div>
          ) : null}

          <div className="flex flex-wrap gap-2 pt-2">
            {targetLandmarkIds.map((landmark) => (
              <span
                key={landmark}
                className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-[#c7d5ca]"
              >
                {landmark}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
