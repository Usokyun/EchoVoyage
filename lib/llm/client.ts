export type LlmClientConfig = {
  apiKey: string
  baseUrl?: string
  model: string
}

export type LlmClient = {
  generateText(input: { system: string; prompt: string }): Promise<string>
}

export function createLlmClient(_config: LlmClientConfig): LlmClient {
  throw new Error("LLM client is not implemented in Day 1.")
}
