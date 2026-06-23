import type { MemoryState, ReviewResult } from "./types"

export function scheduleNextReview(
  memory: MemoryState,
  result: ReviewResult,
  reviewedAt = new Date(),
): MemoryState {
  const intervalDays = getNextIntervalDays(memory, result)
  const nextReviewAt = new Date(reviewedAt)
  nextReviewAt.setDate(nextReviewAt.getDate() + intervalDays)

  return {
    ...memory,
    lastReviewedAt: reviewedAt,
    nextReviewAt,
    reviewCount: memory.reviewCount + 1,
    lapseCount: result === "wrong" ? memory.lapseCount + 1 : memory.lapseCount,
  }
}

function getNextIntervalDays(memory: MemoryState, result: ReviewResult): number {
  if (result === "wrong") {
    return 1
  }

  if (result === "correct-slow") {
    return 2
  }

  if (memory.reviewCount >= 2 && memory.lapseCount === 0) {
    return 8
  }

  return 4
}
