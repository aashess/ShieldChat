export type Message = {
  id: string
  text: string
  timestamp: string
  sender: 'me' | 'them'
  delivered?: boolean
  seen?: boolean
}

export type Conversation = {
  id: string
  name: string
  avatar?: string
  lastMessage?: string
  unread?: number
  messages: Message[]
}
