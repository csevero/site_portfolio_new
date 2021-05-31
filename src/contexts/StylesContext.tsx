import { createContext, useState } from 'react'

interface IStyleContextProps {
  themeCurrent: string
  setThemeCurrent: (theme: string) => void
}

const StylesContext = createContext({} as IStyleContextProps)

const StylesProvider: React.FC = ({ children }) => {
  const [themeCurrent, setThemeCurrent] = useState('')

  return (
    <StylesContext.Provider value={{ themeCurrent, setThemeCurrent }}>
      {children}
    </StylesContext.Provider>
  )
}

export default StylesProvider
