import type { AgentPersona } from "@/components/AgentPersonaPicker"
import type { JourneyLandmark } from "@/components/JourneyMap"
import type { MemoryStatsProps } from "@/components/MemoryStats"
import type { TrainingSceneProps } from "@/components/TrainingScene"

export const sampleCorpus = {
  title: "The Road Not Taken",
  language: "English",
  rawText:
    "Two roads diverged in a yellow wood, and sorry I could not travel both. I took the one less traveled by, and that has made all the difference.",
}

export const selectedAgent: AgentPersona = "gentle-guide"

export const demoVoyage = {
  title: "A Fork In The Yellow Wood",
  description:
    "A short route through choice, regret, and the quiet confidence of a path remembered.",
}

export const demoLandmarks: JourneyLandmark[] = [
  {
    id: "landmark-1",
    text: "two roads diverged",
    type: "expression",
    sourceSentence: "Two roads diverged in a yellow wood",
    explanation:
      "A compact image for a choice point. The verb 'diverged' suggests paths separating from one origin.",
    difficulty: 2,
  },
  {
    id: "landmark-2",
    text: "sorry I could not travel both",
    type: "grammar",
    sourceSentence: "And sorry I could not travel both",
    explanation:
      "A compressed poetic structure. The speaker places emotion before the full reason.",
    difficulty: 3,
  },
  {
    id: "landmark-3",
    text: "less traveled by",
    type: "phrase",
    sourceSentence: "I took the one less traveled by",
    explanation:
      "A phrase for something chosen less often. It carries both solitude and agency.",
    difficulty: 3,
  },
  {
    id: "landmark-4",
    text: "made all the difference",
    type: "expression",
    sourceSentence: "And that has made all the difference",
    explanation:
      "A common expression meaning the choice changed the outcome in an important way.",
    difficulty: 2,
  },
]

export const demoTrainingScene: TrainingSceneProps = {
  title: "At The Fork",
  prompt:
    "Your companion stops beside two quiet trails. Use 'less traveled by' to explain which path you would take and why.",
  targetLandmarkIds: ["less traveled by", "made all the difference"],
  userResponse:
    "I would take the one less traveled by because I want the journey to feel like mine.",
  feedback:
    "Good use of the phrase. The sentence keeps the emotional meaning of the original text while making it personal.",
}

export const demoMemory: MemoryStatsProps = {
  masteryScore: 42,
  dueEchoCount: 3,
  weakLandmarks: ["diverged", "less traveled by", "made all the difference"],
  nextReturns: [
    "Revisit 'diverged' tomorrow in a route-choice scene.",
    "Use 'less traveled by' in a personal answer.",
    "Listen again for the rhythm of the final sentence.",
  ],
}
