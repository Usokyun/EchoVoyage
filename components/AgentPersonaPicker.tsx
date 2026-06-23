export type AgentPersona =
  | "gentle-guide"
  | "strict-mentor"
  | "mischievous-bard"
  | "brave-companion"
  | "silent-scholar"

export type AgentPersonaPickerProps = {
  selectedPersona?: AgentPersona
}

export function AgentPersonaPicker(_props: AgentPersonaPickerProps) {
  // Future UI: choose the companion style for the voyage.
  return null
}
