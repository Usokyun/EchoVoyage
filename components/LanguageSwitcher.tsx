import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import type { Locale } from "@/i18n/routing"

type LanguageSwitcherProps = {
  locale: Locale
}

const languageOptions: Array<{
  locale: Locale
  labelKey: "en" | "zh"
}> = [
  { locale: "en", labelKey: "en" },
  { locale: "zh", labelKey: "zh" },
]

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const t = useTranslations("LanguageSwitcher")

  return (
    <div
      aria-label={t("label")}
      className="flex items-center rounded-full border border-[color:var(--border)] bg-[rgba(255,250,240,0.7)] p-1"
    >
      {languageOptions.map((option) => {
        const isActive = option.locale === locale

        return (
          <Link
            key={option.locale}
            href="/"
            locale={option.locale}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-full px-3 py-1.5 font-mono text-xs transition ${
              isActive
                ? "bg-[var(--foreground)] text-[var(--surface-strong)]"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
          >
            {t(option.labelKey)}
          </Link>
        )
      })}
    </div>
  )
}
