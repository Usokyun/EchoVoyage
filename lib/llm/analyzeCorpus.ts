export type CorpusAnalysisInput = {
  rawText: string
  language?: string
}

export type CorpusAnalysis = {
  sentences: string[]
  difficulty: number
  words: string[]
  phrases: string[]
  grammarPoints: string[]
  expressions: string[]
  contextNotes: string[]
}

export async function analyzeCorpus(
  _input: CorpusAnalysisInput,
): Promise<CorpusAnalysis> {
  throw new Error("Corpus analysis is not implemented in Day 1.")
}
