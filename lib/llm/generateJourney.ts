export type GeneratedLandmark = {
  text: string
  type: "word" | "phrase" | "grammar" | "expression" | "listening" | "culture"
  sourceSentence: string
  explanation: string
  difficulty: number
}

export type GeneratedJourney = {
  title: string
  description: string
  landmarks: GeneratedLandmark[]
  route: Array<{
    title: string
    landmarkTexts: string[]
    sceneIdea: string
  }>
}

export async function generateJourney(): Promise<GeneratedJourney> {
  throw new Error("Journey generation is not implemented in Day 1.")
}
