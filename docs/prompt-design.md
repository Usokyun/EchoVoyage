# Prompt Design

EchoVoyage uses LLMs to transform a corpus into a voyage. Prompts should preserve the source material, produce structured data where possible, and keep product language aligned with the journey metaphor.

## Principles

- Prefer structured JSON output for app-facing generation.
- Preserve source sentence context.
- Avoid generic classroom tone.
- Avoid turning EchoVoyage into a quiz list.
- Use product language: voyage, route, landmark, scene, echo, return, companion.
- Keep explanations concise and grounded in the corpus.
- Separate analysis, journey design, and companion feedback.

## Role 1: Corpus Analyst

Input:

- Raw corpus
- Optional language hint

Output:

- Sentences
- Overall difficulty
- Important words
- Phrases
- Grammar points
- Expressions
- Cultural or context notes

Responsibility:

The Corpus Analyst finds learnable material without destroying the feeling of the original text.

Future target file:

- `lib/llm/analyzeCorpus.ts`

## Role 2: Journey Designer

Input:

- Corpus analysis
- Extracted landmarks
- Agent persona

Output:

- Voyage title
- Route description
- Landmark order
- Scene ideas
- Mastery goals

Responsibility:

The Journey Designer turns analysis into a route the learner can travel.

Future target file:

- `lib/llm/generateJourney.ts`

## Role 3: Companion Agent

Input:

- Agent persona
- Current scene
- Due landmarks
- User answer
- User memory state

Output:

- Roleplay prompt
- Correction
- Hint
- Encouragement
- Follow-up question
- Review summary

Responsibility:

The Companion Agent creates the moment-to-moment learning experience.

Future target file:

- `lib/llm/generateScene.ts`

## Shared Prompt File

Future target file:

- `lib/llm/prompts.ts`

It should contain:

- Shared product language rules
- JSON output contracts
- Persona definitions
- Safety and fallback instructions

## Output Contract Direction

Prefer output that can be parsed and rendered:

```ts
type GeneratedJourney = {
  title: string
  description: string
  landmarks: Array<{
    text: string
    type: "word" | "phrase" | "grammar" | "expression" | "listening" | "culture"
    sourceSentence: string
    explanation: string
    difficulty: number
  }>
  route: Array<{
    title: string
    landmarkTexts: string[]
    sceneIdea: string
  }>
}
```

The exact schema can evolve during v0.1, but the app should avoid parsing free-form prose when structured output is available.
