# EchoVoyage

Turn language materials into memory journeys.

EchoVoyage is an open-source learning agent that transforms a piece of language material into a voyage. Give it a corpus you care about: a lyric, speech, dialogue, essay, subtitle, poem, or any meaningful text. EchoVoyage turns that corpus into a route, extracts learnable landmarks, and lets you travel through them with a companion Agent.

EchoVoyage is not a flashcard app. It should feel like a language journey, a memory adventure, and a return to meaningful text.

## Why It Exists

Most language tools start from drills, lists, and dashboards. EchoVoyage starts from material the learner already finds meaningful.

The goal is to make learning feel personal and memorable: the user is not just memorizing isolated items, but revisiting scenes, expressions, rhythms, and meanings from a text that matters to them.

## Core Metaphor

Every corpus is a journey.
Every knowledge point is a landmark.
Every review is an echo.
Every Agent is a companion.
Every mistake is a place worth revisiting.

The main trunk is:

```text
Corpus → Voyage → Landmark → Scene → Response → Feedback → Memory → Return
```

## MVP Scope

The first MVP should prove one thing:

> EchoVoyage can turn a piece of text into an emotionally engaging, memory-aware training journey.

The MVP must include:

- Corpus input
- Agent persona selection
- Journey generation
- Journey Map UI
- One training scene
- Simple memory tracking
- Review page for today's echoes
- Local persistence

The MVP should not include login, payments, social features, mobile apps, QQ/AstrBot integration, audio upload, speech recognition, full FSRS, or a public content library.

## Current Status

This repository is currently in Day 2: the static web prototype phase.

Day 2 turns the project skeleton into a runnable Next.js page that expresses the product feeling. It is still static: LLM generation, SQLite persistence, and real memory tracking are not connected yet.

## Quick Start

Run the local static prototype:

```bash
pnpm install
cp .env.example .env
pnpm dev
```

Then open:

```text
http://localhost:3000
```

The current page previews:

- Corpus input
- Agent persona selection
- Fake Journey Map
- One training scene
- Today's echoes

Project documents:

- [Manifesto](./MANIFESTO.md)
- [Roadmap](./ROADMAP.md)
- [Vision](./docs/vision.md)
- [MVP Scope](./docs/mvp.md)
- [Architecture](./docs/architecture.md)
- [Prompt Design](./docs/prompt-design.md)

## Roadmap

- v0.0: The Soul Prototype
- v0.1: The First Real Voyage
- v0.2: The First Training Scene
- v0.3: Memory and Echoes
- v0.4: Local Persistence
- v0.5: Open-source Usability

See [ROADMAP.md](./ROADMAP.md) for details.

## License

MIT
