import { useState } from 'react'
import dogLogo from '../assets/dog-logo.png'

interface TaskbarProps {
  openWindows: { id: string; title: string }[]
  minimizedIds: Set<string>
  onOpenWindow: (id: string) => void
}

const MENU_ITEMS = [
  { id: 'about', label: 'About the Server' },
  { id: 'events', label: 'Events' }
]

export function Taskbar({ openWindows, minimizedIds, onOpenWindow }: TaskbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const now = new Date()
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  return (
    <>
      {menuOpen && (
        <div
          className="start-menu"
          style={{
            position: 'fixed',
            bottom: 40,
            left: 0,
            zIndex: 9999,
            background: 'silver',
            border: '2px solid',
            borderColor: '#fff #808080 #808080 #fff',
            minWidth: 200,
            boxShadow: '2px 2px 0 #000',
          }}
        >
          <div
            style={{
              background: 'linear-gradient(to bottom, #000080, #1084d0)',
              color: 'white',
              padding: '8px 4px 8px 8px',
              fontWeight: 'bold',
              fontSize: 14,
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              float: 'left',
              height: '40%',
              minHeight: 160,
              letterSpacing: 2,
            }}
          >
            Dogghouse
          </div>
          <ul
            role="menu"
            style={{
              listStyle: 'none',
              margin: 0,
              padding: '4px 0',
              marginLeft: 28,
            }}
          >
            {MENU_ITEMS.map(item => (
              <li
                key={item.id}
                role="menuitem"
                style={{ padding: '6px 24px 6px 8px', cursor: 'pointer', whiteSpace: 'nowrap' }}
                onClick={() => { onOpenWindow(item.id); setMenuOpen(false) }}
                onMouseEnter={e => (e.currentTarget.style.background = '#000080', e.currentTarget.style.color = 'white')}
                onMouseLeave={e => (e.currentTarget.style.background = '', e.currentTarget.style.color = '')}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: 40,
          background: 'silver',
          borderTop: '2px solid #fff',
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          padding: '0 4px',
          zIndex: 9998,
        }}
      >
        <button
          style={{
            fontWeight: 'bold',
            padding: '2px 8px',
            height: 30,
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}
          onClick={() => setMenuOpen(m => !m)}
        >
          <img src={dogLogo} alt="Dog Logo" width={24} height={24} /> Start
        </button>

        <div style={{ width: 2, height: 30, background: '#808080', borderRight: '1px solid #fff', margin: '0 2px' }} />

        {openWindows.map(w => (
          <button
            key={w.id}
            style={{ height: 30, padding: '0 8px', maxWidth: 160, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontStyle: minimizedIds.has(w.id) ? 'italic' : 'normal' }}
            onClick={() => onOpenWindow(w.id)}
          >
            {w.title}
          </button>
        ))}

        <div style={{ flex: 1 }} />

        <div
          style={{
            border: '1px inset silver',
            padding: '2px 8px',
            fontSize: 12,
            background: 'silver',
          }}
        >
          {time}
        </div>
      </div>

      {menuOpen && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 9997 }}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  )
}
