import React, { useEffect, useRef } from 'react'
import type { Conversation } from '../types'
import Header from './Header'
import MessageBubble from './MessageBubble'
import MessageInput from './MessageInput'

const ChatWindow: React.FC<{ conversation: Conversation; onSend: (text: string) => void }> = ({ conversation, onSend }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (el) {
      el.scrollTop = el.scrollHeight
    }
  }, [conversation.id, conversation.messages.length])

  return (
    <div className="flex flex-col h-full">
      <Header title={conversation.name} subtitle={conversation.lastMessage} />
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 chat-scrollbar bg-slate-50 dark:bg-slate-900">
        {conversation.messages.map((m) => (
          <MessageBubble key={m.id} message={m} />
        ))}
      </div>
      <MessageInput onSend={onSend} /> 
    </div>
  )
}

export default ChatWindow
