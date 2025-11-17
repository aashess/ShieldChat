import React from 'react'

const Header: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => {
  return (
    <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
      <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-sm font-medium">A</div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">{title}</div>
        {subtitle && <div className="text-xs text-slate-500 dark:text-slate-400 truncate">{subtitle}</div>}
      </div>
      <div className="flex gap-2">
        <button aria-label="Call" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700">
          📞
        </button>
        <button aria-label="More" className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700">
          ⋯
        </button>
      </div>
    </div>
  )
}

export default Header
