# Architecture

EchoVoyage should stay local-first, easy to run, and easy to extend.

The first implementation target is a simple web version. Other channels can come later, after the trunk works.

## Suggested Stack

- Framework: Next.js
- UI: Tailwind CSS
- Component library: shadcn/ui, optional
- Database: SQLite
- ORM: Prisma or Drizzle, to be chosen before v0.4
- LLM: OpenAI-compatible adapter
- State management: simple React state first
- Auth: none in MVP
- Deployment: local-first, later Docker

Day 1 does not initialize the full web app. It only creates the skeleton and documents the target structure.

## Conceptual Modules

### `app/`

Future Next.js App Router pages.

Expected routes:

- `/`: Landing and first voyage entry
- `/voyage`: Journey Map and current training scene
- `/review`: Today's echoes

### `components/`

Reusable UI components:

- `CorpusInput`
- `AgentPersonaPicker`
- `JourneyMap`
- `TrainingScene`
- `MemoryStats`

### `lib/llm/`

LLM adapter and generation functions:

- `client.ts`: OpenAI-compatible client wrapper
- `prompts.ts`: shared prompt templates
- `analyzeCorpus.ts`: Corpus Analyst role
- `generateJourney.ts`: Journey Designer role
- `generateScene.ts`: Companion Agent scene role

### `lib/memory/`

Memory state and simple review scheduling:

- `types.ts`
- `scheduler.ts`

### `lib/db/`

Database schema and persistence layer.

Day 1 stores only schema direction. SQLite implementation comes later.

## Data Flow

```text
Corpus input
  → LLM corpus analysis
  → Knowledge landmarks
  → Journey generation
  → Journey Map rendering
  → Scene generation
  → User response
  → Agent feedback
  → Memory update
  → Review return
```

## First Page Wireframe

The future landing page should contain:

1. Hero: explain EchoVoyage in one sentence.
2. Corpus Input: paste meaningful text.
3. Agent Selector: choose a companion.
4. Fake Journey Map: show route and landmarks.
5. Fake Training Scene: show one roleplay interaction.
6. Today's Echoes: preview memory return.

## Boundaries

Do not add branch features before the trunk works.

Avoid early complexity:

- No auth
- No multi-user system
- No full FSRS
- No audio features
- No channel integrations
- No public library

## Local-first Principle

EchoVoyage should be friendly to contributors:

```bash
git clone ...
pnpm install
cp .env.example .env
pnpm dev
```

The user should control their corpus, API keys, and local data.
