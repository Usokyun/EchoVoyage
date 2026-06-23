# EchoVoyage Roadmap

Build the trunk first:

```text
Corpus → Voyage → Landmark → Scene → Response → Feedback → Memory → Return
```

Everything else is a branch.

## v0.0 — The Soul Prototype

Goal: make EchoVoyage feel real before full backend logic exists.

Build:

- Project manifesto
- MVP scope
- Architecture notes
- Prompt design notes
- Initial issue list
- Page and component skeleton
- Static prototype direction

Success condition:

A visitor can understand the product feeling in one minute.

## v0.1 — The First Real Voyage

Goal: user pastes text and the system generates a real Journey Map.

Build:

- OpenAI-compatible LLM adapter
- Corpus analysis prompt
- Journey generation prompt
- JSON output parsing
- Journey Map rendering
- Basic error handling

Success condition:

The system can transform an arbitrary short English text into landmarks and a journey route.

## v0.2 — The First Training Scene

Goal: user can enter one Agent-generated training scene.

Build:

- Roleplay scene generator
- User answer input
- Agent feedback generator
- Simple correctness judgment
- Scene completion state

Success condition:

The user can practice one or more landmarks through an Agent dialogue.

## v0.3 — Memory And Echoes

Goal: the system remembers what the user struggled with.

Build:

- `MemoryState` model
- Review history
- Simple scheduler
- Today's echoes page
- Memory update after each answer

Initial scheduler:

- Wrong: review tomorrow
- Correct but slow: review in 2 days
- Correct and confident: review in 4 days
- Repeated correct: interval doubles

Success condition:

The system can decide what the user should revisit next.

## v0.4 — Local Persistence

Goal: user can return later and continue the voyage.

Build:

- SQLite integration
- Save corpus
- Save voyage
- Save landmarks
- Save scenes
- Save memory states
- Load previous voyages

Success condition:

The journey survives page refresh and restart.

## v0.5 — Open-source Usability

Goal: make it easy for others to run and contribute.

Build:

- `.env.example`
- Setup guide
- Optional Dockerfile
- Contribution guide
- Prompt design docs
- Example corpus
- Screenshots or demo GIF

Success condition:

A new developer can clone and run the project locally.

## After MVP

Only add branches after the trunk works.

Possible branches:

- Agent persona system
- More training scenes
- FSRS-inspired memory
- Audio features
- Multi-channel support
- Local-first privacy
