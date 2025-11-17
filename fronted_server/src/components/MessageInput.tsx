import React, { useState } from 'react'

const MessageInput: React.FC<{ onSend: (text: string) => void }> = ({ onSend }) => {
  const [value, setValue] = useState('')

  function submit() {
    const text = value.trim()
    if (!text) return
    onSend(text)
    setValue('')
  }

  return (
    <div className="p-3 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
      <div className="flex gap-2 items-center">
        <textarea
          aria-label="Type a message"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              submit()
            }
          }}
          className="flex-1 resize-none rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-whatsapp"
          rows={1}
        />
        <button
          onClick={submit}
          aria-label="Send message"
          className="inline-flex items-center justify-center px-3 py-2 bg-whatsapp text-white rounded-md hover:brightness-90">
          Send
        </button>
      </div>
    </div>
  )
}

export default MessageInput
