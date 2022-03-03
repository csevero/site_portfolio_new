import { useEffect, useState } from 'react'
import { ToggleButton, ToggleThumb } from './style'

interface IHeader {
  themeInfo: {
    activeTheme: string
    setActiveTheme: React.Dispatch<React.SetStateAction<string>>
    inactiveTheme: string
  }
}

const ToggleThemeButton: React.FC<IHeader> = ({
  themeInfo: { activeTheme, inactiveTheme, setActiveTheme }
}) => {
  return (
    <ToggleButton
      aria-label={`Change to ${inactiveTheme} mode`}
      title={`Change to ${inactiveTheme} mode`}
      type="button"
      onClick={() => setActiveTheme(inactiveTheme)}
    >
      <ToggleThumb activeTheme={activeTheme} />
      <span aria-hidden={true}>🌙</span>
      <span aria-hidden={true}>☀️</span>
    </ToggleButton>
  )
}

export { ToggleThemeButton }
