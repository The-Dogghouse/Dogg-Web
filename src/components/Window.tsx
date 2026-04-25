import { Rnd } from 'react-rnd'
import * as React from "react";

interface WindowProps {
  id: string
  title: string
  icon?: string
  defaultX?: number
  defaultY?: number
  defaultWidth?: number
  defaultHeight?: number
  children: React.ReactNode
  minimized: boolean
  onClose: (id: string) => void
  onFocus: (id: string) => void
  onMinimize: (id: string) => void
  zIndex: number
}

export function Window({
  id,
  title,
  icon,
  defaultX = 100,
  defaultY = 100,
  defaultWidth = 400,
  defaultHeight = 300,
  children,
  minimized,
  onClose,
  onFocus,
  onMinimize,
  zIndex,
}: WindowProps) {
  return (
    <Rnd
      default={{ x: defaultX, y: defaultY, width: defaultWidth, height: defaultHeight }}
      minWidth={300}
      minHeight={minimized ? 0 : 150}
      style={{ zIndex, display: minimized ? 'none' : 'flex', flexDirection: 'column' }}
      onMouseDown={() => onFocus(id)}
      dragHandleClassName="window-title-bar"
      bounds="parent"
      className="window"
    >
      <div className="title-bar window-title-bar" style={{ cursor: 'move', flexShrink: 0 }}>
        <div className="title-bar-text">
          {icon && <img src={icon} alt="" style={{ width: 16, height: 16, marginRight: 4, verticalAlign: 'middle' }} />}
          {title}
        </div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" onClick={() => onMinimize(id)} />
          <button aria-label="Maximize" />
          <button aria-label="Close" onClick={() => onClose(id)} />
        </div>
      </div>
      <div className="window-body">
        {children}
      </div>
    </Rnd>
  )
}
