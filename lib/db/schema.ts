export type Corpus = {
  id: string
  title: string
  rawText: string
  language: string
  createdAt: Date
}

export type Voyage = {
  id: string
  corpusId: string
  agentId: string
  title: string
  description: string
  masteryScore: number
  createdAt: Date
}

export type KnowledgeLandmark = {
  id: string
  corpusId: string
  text: string
  type: "word" | "phrase" | "grammar" | "expression" | "listening" | "culture"
  sourceSentence: string
  explanation: string
  difficulty: number
}

export type TrainingScene = {
  id: string
  voyageId: string
  sceneType: "roleplay" | "recall" | "translation" | "cloze" | "dialogue"
  title: string
  prompt: string
  targetLandmarkIds: string[]
  createdAt: Date
}
