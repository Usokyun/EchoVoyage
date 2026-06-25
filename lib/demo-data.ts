import type { AgentPersona } from "@/components/AgentPersonaPicker"
import type { JourneyLandmark } from "@/components/JourneyMap"
import type { MemoryStatsProps } from "@/components/MemoryStats"
import type { TrainingSceneProps } from "@/components/TrainingScene"
import type { Locale } from "@/i18n/routing"

type DemoData = {
  sampleCorpus: {
    title: string
    language: string
    rawText: string
  }
  selectedAgent: AgentPersona
  demoVoyage: {
    title: string
    description: string
  }
  demoLandmarks: JourneyLandmark[]
  demoTrainingScene: TrainingSceneProps
  demoMemory: MemoryStatsProps
}

const demoData: Record<Locale, DemoData> = {
  en: {
    sampleCorpus: {
      title: "The Road Not Taken",
      language: "English",
      rawText:
        "Two roads diverged in a yellow wood, and sorry I could not travel both. I took the one less traveled by, and that has made all the difference.",
    },
    selectedAgent: "gentle-guide",
    demoVoyage: {
      title: "A Fork In The Yellow Wood",
      description:
        "A short route through choice, regret, and the quiet confidence of a path remembered.",
    },
    demoLandmarks: [
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
    ],
    demoTrainingScene: {
      title: "At The Fork",
      prompt:
        "Your companion stops beside two quiet trails. Use 'less traveled by' to explain which path you would take and why.",
      targetLandmarkIds: ["less traveled by", "made all the difference"],
      userResponse:
        "I would take the one less traveled by because I want the journey to feel like mine.",
      feedback:
        "Good use of the phrase. The sentence keeps the emotional meaning of the original text while making it personal.",
    },
    demoMemory: {
      masteryScore: 42,
      dueEchoCount: 3,
      weakLandmarks: ["diverged", "less traveled by", "made all the difference"],
      nextReturns: [
        "Revisit 'diverged' tomorrow in a route-choice scene.",
        "Use 'less traveled by' in a personal answer.",
        "Listen again for the rhythm of the final sentence.",
      ],
    },
  },
  zh: {
    sampleCorpus: {
      title: "未选择的路",
      language: "英语 / 中文说明",
      rawText:
        "两条路在黄树林中分开，而我遗憾无法同时踏上它们。我选择了少有人走的那一条，而这带来了全部不同。",
    },
    selectedAgent: "gentle-guide",
    demoVoyage: {
      title: "黄树林中的岔路",
      description:
        "一条穿过选择、遗憾和安静自信的短路线，让一段文本变成可以返回的记忆。",
    },
    demoLandmarks: [
      {
        id: "landmark-1",
        text: "two roads diverged",
        type: "expression",
        sourceSentence: "两条路在黄树林中分开",
        explanation:
          "这是一个选择时刻的紧凑意象。diverged 暗示两条路径从同一个起点分开。",
        difficulty: 2,
      },
      {
        id: "landmark-2",
        text: "sorry I could not travel both",
        type: "grammar",
        sourceSentence: "遗憾无法同时走两条路",
        explanation:
          "这是一种压缩的诗性结构，先放出情绪，再补上原因。",
        difficulty: 3,
      },
      {
        id: "landmark-3",
        text: "less traveled by",
        type: "phrase",
        sourceSentence: "少有人走的那条路",
        explanation:
          "这个短语表示较少被选择的路径，也带着一点孤独和主动选择的意味。",
        difficulty: 3,
      },
      {
        id: "landmark-4",
        text: "made all the difference",
        type: "expression",
        sourceSentence: "而这带来了全部不同",
        explanation:
          "这是常见表达，表示一个选择对结果产生了重要改变。",
        difficulty: 2,
      },
    ],
    demoTrainingScene: {
      title: "在岔路口",
      prompt:
        "你的陪伴者停在两条安静的小路旁。请用 less traveled by 说明你会选择哪条路，以及为什么。",
      targetLandmarkIds: ["less traveled by", "made all the difference"],
      userResponse:
        "I would take the one less traveled by because I want the journey to feel like mine.",
      feedback:
        "这个短语用得很好。你的句子保留了原文里的情绪，同时把它变成了自己的选择。",
    },
    demoMemory: {
      masteryScore: 42,
      dueEchoCount: 3,
      weakLandmarks: ["diverged", "less traveled by", "made all the difference"],
      nextReturns: [
        "明天在路线选择场景里重新遇见 diverged。",
        "用 less traveled by 写一个更个人的回答。",
        "再听一次最后一句的节奏。",
      ],
    },
  },
}

export function getDemoData(locale: Locale) {
  return demoData[locale]
}
