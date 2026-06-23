export type SceneGenerationInput = {
  agentId: string
  voyageId: string
  targetLandmarkIds: string[]
}

export type GeneratedScene = {
  title: string
  prompt: string
  targetLandmarkIds: string[]
}

export async function generateScene(
  _input: SceneGenerationInput,
): Promise<GeneratedScene> {
  throw new Error("Scene generation is not implemented in Day 1.")
}
