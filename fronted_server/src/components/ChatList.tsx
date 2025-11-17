import React from 'react'
import type { Conversation } from '../types'

const ChatItem: React.FC<{ c: Conversation; isSelected: boolean; onClick: () => void }> = ({ c, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left flex items-center gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700 ${
        isSelected ? 'bg-slate-100 dark:bg-slate-700' : ''
      }`}>
      <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-medium">{c.name.charAt(0)}</div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold truncate">{c.name}</div>
          {c.unread ? <div className="text-xs bg-whatsapp text-white px-2 py-0.5 rounded-full">{c.unread}</div> : null}
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-400 truncate">{c.lastMessage}</div>
      </div>
    </button>
  )
}

const ChatList: React.FC<{ conversations: Conversation[]; selectedId?: string; onSelect: (id: string) => void }> = ({
  conversations,
  selectedId,
  onSelect,
}) => {
  return (
    <div className="flex flex-col h-full">
      <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        <div className="text-lg font-semibold">Chats</div>
      </div>
      <div className="overflow-y-auto flex-1 chat-scrollbar">
        {conversations.map((c) => (
          <ChatItem key={c.id} c={c} isSelected={c.id === selectedId} onClick={() => onSelect(c.id)} />
        ))}
      </div>
    </div>
  )
}

export default ChatList
