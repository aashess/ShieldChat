import React from 'react'
import type { Message } from '../types'

const MessageBubble: React.FC<{ message: Message }> = ({ message }) => {
  const isMe = message.sender === 'me'
  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'} py-1 px-4`}> 
      <div
        className={`max-w-[80%] px-3 py-2 rounded-lg break-words text-sm ${
          isMe ? 'bg-whatsapp text-white rounded-br-none' : 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-bl-none'
        }`}
        aria-label={`message from ${isMe ? 'you' : 'them'}`}>
        <div>{message.text}</div>
        <div className="text-[10px] opacity-70 mt-1 text-right">{new Date(message.timestamp).toLocaleTimeString()}</div>
      </div>
    </div>
  )
}

export default MessageBubble
