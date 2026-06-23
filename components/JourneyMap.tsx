export type JourneyLandmark = {
  id: string
  text: string
  sourceSentence: string
  explanation: string
}

export type JourneyMapProps = {
  title: string
  landmarks: JourneyLandmark[]
}

export function JourneyMap(_props: JourneyMapProps) {
  // Future UI: render the route and its ordered landmarks.
  return null
}
