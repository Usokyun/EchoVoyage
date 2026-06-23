# EchoVoyage Handoff

## 1. Project Feeling

EchoVoyage is not a flashcard app.

EchoVoyage is an open-source learning agent that turns a piece of language material into a journey.

The user gives the system a corpus they love — a lyric, speech, dialogue, essay, subtitle, poem, or any meaningful text. EchoVoyage transforms that corpus into a voyage. The Agent becomes the user's companion. The knowledge points become landmarks. The review sessions become returns to places once visited. The learning process becomes an adventure instead of a mechanical routine.

The ideal feeling:

> I gave EchoVoyage a piece of text.
> Then I traveled through it with my Agent.
> I saw its words, scenes, expressions, rhythms, and meanings.
> I was not trying hard to memorize it.
> But when I looked back, the text had already become part of me.

EchoVoyage should feel romantic, personal, adventurous, and memorable.

It should not feel like:

* a traditional Anki clone
* a vocabulary drilling tool
* a generic AI chatbot
* a boring course generator
* a productivity dashboard

It should feel like:

* a language journey
* a memory adventure
* a personalized companion
* a return to meaningful text
* a world built from the user's own corpus

---

## 2. Core Metaphor

EchoVoyage is built around one metaphor:

> Every corpus is a journey.
> Every knowledge point is a landmark.
> Every review is an echo.
> Every Agent is a companion.
> Every mistake is a place worth revisiting.

Product language should follow this metaphor.

Avoid making the user feel like they are just reviewing cards.

Prefer words like:

* Voyage
* Journey
* Route
* Landmark
* Echo
* Campfire
* Return
* Trail
* Scene
* Companion
* Memory Fragment
* Revisit
* Mastery

Instead of:

* Card deck
* Quiz list
* Assignment
* Task queue
* Study module
* Memorization drill

---

## 3. Project Positioning

EchoVoyage is a personal open-source project.

It is not designed as a commercial SaaS first. It is designed as a self-hostable, extensible, imagination-driven learning system.

The first channel will be a simple web page, not QQ/AstrBot yet.

Long-term, EchoVoyage can support multiple channels:

* Web
* QQ bot
* Telegram bot
* Discord bot
* CLI
* Mobile app
* Browser extension

But the first goal is to make the web version express the soul of the project.

---

## 4. Main Trunk

The main trunk of EchoVoyage is:

> Input corpus → Generate journey → Enter training scene → User responds → Agent gives feedback → Memory state updates → User returns later for review

This trunk must be completed before adding side features.

The MVP should prove one thing:

> EchoVoyage can turn a piece of text into an emotionally engaging, memory-aware training journey.

The MVP does not need to be large.

It only needs to make one complete voyage feel real.

---

## 5. MVP Scope

### MVP Must Have

1. Corpus input

   * User can paste a piece of text.
   * The system saves it as a corpus.

2. Agent persona selection

   * User can choose one Agent style.
   * Example personas:

     * Gentle Guide
     * Strict Mentor
     * Mischievous Bard
     * Brave Companion
     * Silent Scholar

3. Journey generation

   * LLM analyzes the corpus.
   * LLM extracts knowledge landmarks.
   * LLM creates a Journey Map.

4. Journey Map UI

   * Shows the generated route.
   * Shows landmarks extracted from the corpus.
   * Each landmark represents a learnable item.

5. One training scene

   * Start with roleplay dialogue.
   * The Agent creates a small scenario using selected knowledge points.
   * User answers.
   * Agent gives feedback.

6. Simple memory tracking

   * Record whether the user answered correctly.
   * Record weak knowledge points.
   * Schedule simple reviews.
   * No need for full FSRS in MVP.

7. Review page

   * Shows today's echoes.
   * User can revisit knowledge points that are fading.
   * Agent generates a short review scene.

8. Local persistence

   * Store corpus, voyage, landmarks, memory state, and review records.
   * SQLite is enough.

---

## 6. MVP Should Not Have Yet

Do not build these in the first MVP:

* QQ bot integration
* AstrBot plugin
* Mobile app
* Multi-user system
* Login system
* Payment system
* Public content library
* Full FSRS implementation
* Audio upload
* Speech recognition
* Lyrics database
* TED transcript database
* Plugin marketplace
* Complex dashboard
* Social features

These are branches, not the trunk.

---

## 7. Suggested Tech Stack

Recommended first version:

* Framework: Next.js
* UI: Tailwind CSS
* Component library: shadcn/ui, optional
* Database: SQLite
* ORM: Prisma or Drizzle
* LLM: OpenAI-compatible adapter
* State management: simple React state first
* Deployment: local-first, later Docker
* Auth: none in MVP

Keep the project easy to run locally.

The project should feel friendly to contributors:

```bash
git clone ...
pnpm install
cp .env.example .env
pnpm dev
```

---

## 8. Core Data Models

### Corpus

Represents the raw text provided by the user.

```ts
type Corpus = {
  id: string
  title: string
  rawText: string
  language: string
  createdAt: Date
}
```

### Voyage

Represents one learning journey generated from a corpus.

```ts
type Voyage = {
  id: string
  corpusId: string
  agentId: string
  title: string
  description: string
  masteryScore: number
  createdAt: Date
}
```

### KnowledgeLandmark

Represents an extracted learnable point.

```ts
type KnowledgeLandmark = {
  id: string
  corpusId: string
  text: string
  type: "word" | "phrase" | "grammar" | "expression" | "listening" | "culture"
  sourceSentence: string
  explanation: string
  difficulty: number
}
```

### MemoryState

Represents the user's memory state for a landmark.

```ts
type MemoryState = {
  id: string
  landmarkId: string
  familiarity: number
  stability: number
  difficulty: number
  lastReviewedAt: Date | null
  nextReviewAt: Date | null
  reviewCount: number
  lapseCount: number
}
```

### TrainingScene

Represents an Agent-generated training interaction.

```ts
type TrainingScene = {
  id: string
  voyageId: string
  sceneType: "roleplay" | "recall" | "translation" | "cloze" | "dialogue"
  title: string
  prompt: string
  targetLandmarkIds: string[]
  createdAt: Date
}
```

---

## 9. LLM Responsibilities

LLM should be split into three conceptual roles.

### 1. Corpus Analyst

Input:

* raw corpus

Output:

* sentences
* difficulty
* important words
* phrases
* grammar points
* expressions
* cultural/contextual notes

### 2. Journey Designer

Input:

* corpus analysis
* landmarks

Output:

* voyage title
* route
* landmark order
* scene ideas
* mastery goals

### 3. Companion Agent

Input:

* Agent persona
* current scene
* due landmarks
* user answer
* user memory state

Output:

* roleplay prompt
* correction
* hint
* encouragement
* follow-up question
* review summary

---

## 10. Day 1 Goal

Day 1 is not for coding the full system.

Day 1 is for giving EchoVoyage a soul and a skeleton.

By the end of Day 1, the repository should clearly answer:

1. What is EchoVoyage?
2. Why does it exist?
3. What makes it different?
4. What is the first MVP?
5. What should be built first?
6. What should not be built yet?
7. What does the first user journey look like?

Day 1 should produce documents, structure, and a small static prototype direction.

---

## 11. Day 1 Deliverables

### Required

1. Create GitHub repository

Suggested repo name:

```text
echovoyage
```

2. Create core documents

```text
README.md
MANIFESTO.md
ROADMAP.md
docs/vision.md
docs/mvp.md
docs/architecture.md
docs/prompt-design.md
```

3. Write README first draft

README should include:

* Project name
* One-line slogan
* What is EchoVoyage?
* Why does it exist?
* Core metaphor
* MVP scope
* Quick Start placeholder
* Roadmap
* License

4. Write MANIFESTO

MANIFESTO should describe the feeling:

* Corpus as journey
* Agent as companion
* Review as echo
* Memory as return
* Learning as experience

5. Write MVP document

MVP document should define:

* Main trunk
* Must-have features
* Non-goals
* First user flow
* Data models
* v0.1 target

6. Create issue list

Initial GitHub issues:

* [Docs] Write project manifesto
* [Docs] Write MVP scope
* [UI] Build landing page
* [UI] Build corpus input page
* [UI] Build fake Journey Map
* [LLM] Design corpus analysis prompt
* [LLM] Design journey generation prompt
* [Core] Define data models
* [Core] Implement local database schema
* [Core] Implement simple memory scheduler
* [Scene] Implement first roleplay training scene
* [Review] Implement today's echoes page

7. Create project structure

Initial structure:

```text
echovoyage/
  README.md
  MANIFESTO.md
  ROADMAP.md
  LICENSE
  .env.example

  docs/
    vision.md
    mvp.md
    architecture.md
    prompt-design.md

  app/
    page.tsx
    voyage/
    review/

  components/
    CorpusInput.tsx
    AgentPersonaPicker.tsx
    JourneyMap.tsx
    TrainingScene.tsx
    MemoryStats.tsx

  lib/
    llm/
      client.ts
      prompts.ts
      analyzeCorpus.ts
      generateJourney.ts
      generateScene.ts

    memory/
      scheduler.ts
      types.ts

    db/
      schema.ts
```

8. Build or sketch static UI

Day 1 static prototype can be fake data.

Minimum pages:

* Landing page
* Corpus input section
* Agent selector section
* Fake Journey Map section
* Fake training scene section

The goal is not functionality yet.

The goal is to make the project feel alive.

---

## 12. Day 1 Definition of Done

Day 1 is complete when:

* The repository exists.
* README explains the idea clearly.
* MANIFESTO captures the emotional direction.
* ROADMAP defines the first MVP.
* The main trunk is written down.
* Non-goals are clearly stated.
* At least 10 GitHub issues exist.
* The folder structure exists.
* A static landing page or wireframe exists.
* Someone opening the repo can understand the project in 2 minutes.

---

## 13. MVP Development Plan

### v0.0 — The Soul Prototype

Goal:

Make EchoVoyage feel real without full backend logic.

Build:

* Landing page
* Corpus input UI
* Agent persona picker
* Fake Journey Map
* Fake training scene
* Fake review summary

Success condition:

A visitor can understand the product feeling in one minute.

No real LLM required yet.

---

### v0.1 — The First Real Voyage

Goal:

User pastes text, LLM generates a real Journey Map.

Build:

* LLM API adapter
* Corpus analysis prompt
* Journey generation prompt
* JSON output parsing
* Journey Map rendering
* Basic error handling

Success condition:

The system can transform an arbitrary short English text into landmarks and a journey route.

---

### v0.2 — The First Training Scene

Goal:

User can enter one Agent-generated training scene.

Build:

* Roleplay scene generator
* User answer input
* Agent feedback generator
* Simple correctness judgment
* Scene completion state

Success condition:

The user can practice one or more landmarks through an Agent dialogue.

---

### v0.3 — Memory and Echoes

Goal:

The system remembers what the user struggled with.

Build:

* MemoryState model
* Review history
* Simple scheduler
* Today's echoes page
* Update memory after each answer

Initial scheduler can be simple:

* Wrong: review tomorrow
* Correct but slow: review in 2 days
* Correct and confident: review in 4 days
* Repeated correct: interval doubles

Success condition:

The system can decide what the user should revisit next.

---

### v0.4 — Local Persistence

Goal:

User can return later and continue the voyage.

Build:

* SQLite integration
* Save corpus
* Save voyage
* Save landmarks
* Save scenes
* Save memory states
* Load previous voyages

Success condition:

The journey survives page refresh and restart.

---

### v0.5 — Open-source Usability

Goal:

Make it easy for others to run and contribute.

Build:

* .env.example
* Setup guide
* Dockerfile, optional
* Better README
* Contribution guide
* Prompt design docs
* Example corpus
* Screenshots or demo GIF

Success condition:

A new developer can clone and run the project locally.

---

## 14. Branches After MVP

Only after the main trunk works, add branches.

Possible branches:

### Agent Persona System

* Custom Agent name
* Personality prompt
* Tone settings
* Training style
* Visual avatar

### More Training Scenes

* Cloze
* Translation
* Recall
* Shadowing
* Debate
* Story continuation
* Sentence transformation
* Mistake repair

### Better Memory Algorithm

* FSRS-inspired model
* Difficulty/stability/retrievability
* Per-user calibration
* Confidence-based scheduling

### Audio Features

* Text-to-speech
* User recording
* Pronunciation feedback
* Shadowing mode
* Lyrics/audio alignment

### Multi-channel Support

* QQ bot
* Telegram
* Discord
* AstrBot plugin
* Browser extension

### Local-first Privacy

* Local model support
* Local database
* No cloud requirement
* User-controlled API keys

---

## 15. Development Principle

Build the trunk first.

The trunk is:

```text
Corpus → Voyage → Landmark → Scene → Response → Feedback → Memory → Return
```

Everything else is a branch.

Do not add branches until the trunk feels good.

A small but magical trunk is better than a large but soulless system.

EchoVoyage should first become something people can feel.

Then it can become something people can extend.
