export type MemoryState = {
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

export type ReviewResult = "wrong" | "correct-slow" | "correct-confident"
