import { AgentPersonaPicker } from "@/components/AgentPersonaPicker"
import { CorpusInput } from "@/components/CorpusInput"
import { JourneyMap } from "@/components/JourneyMap"
import { MemoryStats } from "@/components/MemoryStats"
import { TrainingScene } from "@/components/TrainingScene"
import {
  demoLandmarks,
  demoMemory,
  demoTrainingScene,
  demoVoyage,
  sampleCorpus,
  selectedAgent,
} from "@/lib/demo-data"

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <section className="relative min-h-[100dvh] px-5 py-6 md:px-8">
        <div className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_70%_10%,rgba(31,111,85,0.2),transparent_30rem)]" />

        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[color:var(--border)] bg-[rgba(255,250,240,0.62)] px-4 py-3 backdrop-blur">
          <a href="#" className="text-sm font-semibold tracking-[-0.02em]">
            EchoVoyage
          </a>
          <div className="hidden items-center gap-6 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)] md:flex">
            <a href="#voyage" className="transition hover:text-[var(--foreground)]">
              Voyage
            </a>
            <a
              href="#journey"
              className="transition hover:text-[var(--foreground)]"
            >
              Landmarks
            </a>
            <a href="#echoes" className="transition hover:text-[var(--foreground)]">
              Echoes
            </a>
          </div>
          <a
            href="https://github.com/Usokyun/EchoVoyage"
            className="rounded-full bg-[var(--foreground)] px-4 py-2 text-sm font-medium text-[var(--surface-strong)] transition hover:bg-[var(--accent)]"
          >
            GitHub
          </a>
        </nav>

        <div className="mx-auto grid max-w-7xl gap-10 pb-16 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:pt-28">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
              Day 2 static prototype
            </p>
            <h1 className="mt-6 max-w-[12ch] text-6xl font-semibold leading-[0.92] tracking-[-0.075em] text-balance md:text-8xl">
              Turn language into a memory voyage.
            </h1>
            <p className="mt-6 max-w-[40rem] text-lg leading-8 text-[var(--muted)] md:text-xl">
              Paste a corpus you care about. Choose a companion. Travel through
              its words, scenes, expressions, and echoes until the text becomes
              part of your memory.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#corpus"
                className="rounded-full bg-[var(--accent)] px-6 py-3 text-center text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-[#185d47]"
              >
                Start with a corpus
              </a>
              <a
                href="#journey"
                className="rounded-full border border-[color:var(--border)] bg-[rgba(255,250,240,0.6)] px-6 py-3 text-center text-sm font-semibold transition hover:border-[var(--accent)]"
              >
                Preview the route
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[color:var(--border)] bg-[var(--surface)] p-5 backdrop-blur">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
              The trunk
            </p>
            <div className="mt-5 grid gap-3">
              {[
                "Corpus",
                "Voyage",
                "Landmark",
                "Scene",
                "Response",
                "Feedback",
                "Memory",
                "Return",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-[color:var(--border)] bg-[rgba(255,250,240,0.62)] px-4 py-3"
                >
                  <span className="font-mono text-xs text-[var(--muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="voyage"
        className="mx-auto grid max-w-7xl gap-6 px-5 py-10 md:px-8 lg:grid-cols-[1fr_0.82fr]"
      >
        <CorpusInput
          title={sampleCorpus.title}
          rawText={sampleCorpus.rawText}
          language={sampleCorpus.language}
        />
        <AgentPersonaPicker selectedPersona={selectedAgent} />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <JourneyMap
          title={demoVoyage.title}
          description={demoVoyage.description}
          landmarks={demoLandmarks}
        />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <TrainingScene {...demoTrainingScene} />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <MemoryStats {...demoMemory} />
      </section>

      <footer className="mx-auto max-w-7xl px-5 pb-10 pt-4 text-sm leading-6 text-[var(--muted)] md:px-8">
        <div className="rounded-[1.5rem] border border-[color:var(--border)] bg-[rgba(255,250,240,0.5)] p-5">
          EchoVoyage Day 2 is a static web prototype. LLM generation, SQLite
          persistence, and real memory updates are intentionally out of scope.
        </div>
      </footer>
    </main>
  )
}
