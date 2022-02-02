import { useEffect, useState } from 'react'
import { ToggleButton, ToggleThumb } from './style'

const ToggleThemeButton = () => {
  const [activeTheme, setActiveTheme] = useState('light')
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light'

  useEffect(() => {
    const saveTheme = localStorage.getItem('theme')

    saveTheme && setActiveTheme(saveTheme)
  }, [])

  useEffect(() => {
    document.body.dataset.theme = activeTheme

    localStorage.setItem('theme', activeTheme)
  }, [activeTheme])

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
