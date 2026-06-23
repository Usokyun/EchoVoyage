# MVP Scope

The MVP should prove one thing:

> EchoVoyage can turn a piece of text into an emotionally engaging, memory-aware training journey.

The MVP does not need to be large. It needs one complete voyage that feels real.

## Main Trunk

```text
Corpus → Voyage → Landmark → Scene → Response → Feedback → Memory → Return
```

This trunk must work before adding side features.

## Must-have Features

### Corpus Input

- User can paste a piece of text.
- The system saves it as a corpus.

### Agent Persona Selection

- User can choose one Agent style.
- Initial personas:
  - Gentle Guide
  - Strict Mentor
  - Mischievous Bard
  - Brave Companion
  - Silent Scholar

### Journey Generation

- LLM analyzes the corpus.
- LLM extracts knowledge landmarks.
- LLM creates a Journey Map.

### Journey Map UI

- Shows the generated route.
- Shows landmarks extracted from the corpus.
- Each landmark represents a learnable item.

### One Training Scene

- Start with roleplay dialogue.
- The Agent creates a small scenario using selected knowledge points.
- User answers.
- Agent gives feedback.

### Simple Memory Tracking

- Record whether the user answered correctly.
- Record weak knowledge points.
- Schedule simple reviews.
- Full FSRS is not required in the MVP.

### Review Page

- Shows today's echoes.
- User can revisit knowledge points that are fading.
- Agent generates a short review scene.

### Local Persistence

- Store corpus, voyage, landmarks, memory state, and review records.
- SQLite is enough.

## Non-goals

Do not build these in the first MVP:

- QQ bot integration
- AstrBot plugin
- Mobile app
- Multi-user system
- Login system
- Payment system
- Public content library
- Full FSRS implementation
- Audio upload
- Speech recognition
- Lyrics database
- TED transcript database
- Plugin marketplace
- Complex dashboard
- Social features

These are branches, not the trunk.

## First User Flow

1. User opens EchoVoyage.
2. User pastes a meaningful corpus.
3. User chooses an Agent persona.
4. EchoVoyage analyzes the corpus.
5. EchoVoyage creates a Journey Map.
6. User enters the first training scene.
7. Agent asks a roleplay or recall question.
8. User responds.
9. Agent gives feedback.
10. Memory state updates.
11. User returns later to today's echoes.

## Core Data Models

### Corpus

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

## v0.1 Target

User pastes a short English text and EchoVoyage generates:

- A voyage title
- A short route
- Ordered landmarks
- Explanations for each landmark
- Scene ideas for the first training interaction

## Day 1 Definition Of Done

Day 1 is complete when:

- README explains the idea clearly.
- MANIFESTO captures the emotional direction.
- ROADMAP defines the first MVP path.
- The main trunk is written down.
- Non-goals are clearly stated.
- At least 10 initial issues exist.
- The folder structure exists.
- Static prototype direction is documented.
- Someone opening the repo can understand the project in 2 minutes.
