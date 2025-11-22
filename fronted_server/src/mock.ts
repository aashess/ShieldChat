import type { Conversation } from './types'

const now = () => new Date().toISOString()

export const sampleConversations: Conversation[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    avatar: '',
    lastMessage: 'See you soon!',
    unread: 2,
    messages: [
      { id: 'm1', text: 'Hey, are we still on for today?', timestamp: now(), sender: 'them' },
      { id: 'm2', text: 'Yes — I will be there at 6pm.', timestamp: now(), sender: 'me', delivered: true },
      { id: 'm3', text: 'Great! See you soon!', timestamp: now(), sender: 'them' },
    ],
  },
  {
    id: '2',
    name: 'Design Group',
    avatar: '',
    lastMessage: 'Typed suggestions saved',
    unread: 0,
    messages: [
      { id: 'g1', text: 'Please review the latest assets.', timestamp: now(), sender: 'them' },
      { id: 'g2', text: 'Looks good — pushed minor tweaks.', timestamp: now(), sender: 'me' },
    ],
  },
  {
    id: '3',
    name: 'Bikash',
    avatar: '',
    lastMessage: 'Kaise ho',
    unread: 0,
    messages: [
      { id: 'g1', text: 'Commit the channges.', timestamp: now(), sender: 'them' },
      { id: 'g2', text: 'Looks good — pushed minor tweaks.', timestamp: now(), sender: 'me' },
    ],
  }
]
