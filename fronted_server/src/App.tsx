import React, { useMemo, useState } from 'react'
import './index.css'
import ChatList from './components/ChatList' 
import ChatWindow from './components/ChatWindow' 
import type { Conversation, Message } from '../src/types' 
import { sampleConversations } from '../src/mock'

const App = () => {
  const [conversations, setConversations] = useState<Conversation[]>(() => sampleConversations)
  const [selectedId, setSelectedId] = useState<string>(conversations[0]?.id ?? '')

  const selectedConversation = useMemo(
    () => conversations.find((c) => c.id === selectedId) ?? conversations[0],
    [conversations, selectedId],
  )

  function handleSend(text: string) {
    if (!selectedConversation) return
    const message: Message = {
      id: String(Date.now()),
      text,
      sender: 'me',
      timestamp: new Date().toISOString(),
      delivered: true,
    }
    setConversations((prev) =>
      prev.map((c) => (c.id === selectedConversation.id ? { ...c, messages: [...c.messages, message], lastMessage: text } : c)),
    )
  }

  return (
    <div className="min-h-screen flex items-stretch justify-center p-4 bg-slate-50 dark:bg-slate-900">
      <div className="w-full max-w-[1200px] h-[90vh] bg-white dark:bg-slate-800 shadow-lg rounded-lg overflow-hidden flex">
        <aside className="w-80 md:w-96 border-r border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
          <ChatList
            conversations={conversations}
            selectedId={selectedId}
            onSelect={(id:any) => setSelectedId(id)}
          />
        </aside>
        <main className="flex-1 bg-slate-50 dark:bg-slate-900">
          {selectedConversation ? (
            <ChatWindow conversation={selectedConversation} onSend={handleSend} />
          ) : (
            <div className="flex items-center justify-center h-full">Select a conversation</div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
