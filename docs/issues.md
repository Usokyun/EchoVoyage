# Initial Issues

This local issue list is the Day 1 fallback if GitHub Issues cannot be created automatically.

## [Docs] Write project manifesto

Purpose: capture the emotional direction of EchoVoyage.

Acceptance criteria:

- Explains that EchoVoyage is not a flashcard app.
- Defines corpus as journey, Agent as companion, review as echo, and memory as return.
- Lists preferred and avoided product language.

Suggested files:

- `MANIFESTO.md`
- `docs/vision.md`

## [Docs] Write MVP scope

Purpose: define the first product trunk and prevent scope drift.

Acceptance criteria:

- Documents the main trunk.
- Lists MVP must-have features.
- Lists non-goals.
- Includes first user flow and data models.

Suggested files:

- `docs/mvp.md`
- `README.md`

## [UI] Build landing page

Purpose: make EchoVoyage understandable within one minute.

Acceptance criteria:

- Hero explains the project clearly.
- Page uses voyage and memory language.
- Page points users toward corpus input and first voyage creation.

Suggested files:

- `app/page.tsx`
- `components/CorpusInput.tsx`
- `components/AgentPersonaPicker.tsx`

## [UI] Build corpus input page

Purpose: let users paste a meaningful corpus.

Acceptance criteria:

- User can input title and raw text.
- Empty and too-short input states are handled.
- Submitted corpus can flow into journey generation.

Suggested files:

- `components/CorpusInput.tsx`
- `app/page.tsx`

## [UI] Build fake Journey Map

Purpose: show the route metaphor before real LLM integration.

Acceptance criteria:

- Renders a route with ordered landmarks.
- Shows source sentences and explanations.
- Uses fake data that reflects the product feeling.

Suggested files:

- `components/JourneyMap.tsx`
- `app/voyage/`

## [LLM] Design corpus analysis prompt

Purpose: define how the LLM extracts learning material from a corpus.

Acceptance criteria:

- Prompt returns structured output.
- Output includes sentences, difficulty, words, phrases, grammar, expressions, and context notes.
- Prompt preserves source sentence context.

Suggested files:

- `docs/prompt-design.md`
- `lib/llm/prompts.ts`
- `lib/llm/analyzeCorpus.ts`

## [LLM] Design journey generation prompt

Purpose: turn corpus analysis into a Journey Map.

Acceptance criteria:

- Prompt returns voyage title, route, ordered landmarks, scene ideas, and mastery goals.
- Output uses EchoVoyage product language.
- Prompt avoids generic course or quiz framing.

Suggested files:

- `docs/prompt-design.md`
- `lib/llm/prompts.ts`
- `lib/llm/generateJourney.ts`

## [Core] Define data models

Purpose: lock the first shared vocabulary for implementation.

Acceptance criteria:

- Defines Corpus, Voyage, KnowledgeLandmark, MemoryState, and TrainingScene.
- Types align with MVP document.
- Future DB schema can be derived from the types.

Suggested files:

- `docs/mvp.md`
- `lib/db/schema.ts`
- `lib/memory/types.ts`

## [Core] Implement local database schema

Purpose: persist the first voyage locally.

Acceptance criteria:

- SQLite-backed schema exists.
- Corpus, voyage, landmarks, scenes, and memory states can be stored.
- Migration or setup instructions are documented.

Suggested files:

- `lib/db/schema.ts`
- `docs/architecture.md`

## [Core] Implement simple memory scheduler

Purpose: decide when landmarks should return as echoes.

Acceptance criteria:

- Wrong answers schedule tomorrow.
- Correct but slow answers schedule in 2 days.
- Correct and confident answers schedule in 4 days.
- Repeated correct answers can extend the interval.

Suggested files:

- `lib/memory/scheduler.ts`
- `lib/memory/types.ts`

## [Scene] Implement first roleplay training scene

Purpose: make the first training interaction feel like a scene, not a quiz.

Acceptance criteria:

- Agent creates a roleplay prompt using selected landmarks.
- User can answer.
- Agent can return feedback and a follow-up question.

Suggested files:

- `components/TrainingScene.tsx`
- `lib/llm/generateScene.ts`

## [Review] Implement today's echoes page

Purpose: let users revisit fading landmarks.

Acceptance criteria:

- Page lists landmarks due for review.
- Each echo links back to source sentence and explanation.
- Agent can generate a short review scene.

Suggested files:

- `app/review/`
- `components/MemoryStats.tsx`
- `lib/memory/scheduler.ts`
