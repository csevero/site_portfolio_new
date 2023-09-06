import React, { createContext, useContext } from 'react'

import { getLanguage } from '../helpers/getLanguage'
import pt_BR from '../locales/pt_BR'

interface LocaleContextData {
  getLanguage: () => typeof pt_BR
}

const LocaleContext = createContext<LocaleContextData>(null)

export const LocaleProvider = ({ children }) => {
  return (
    <LocaleContext.Provider
      value={{
        getLanguage
      }}
    >
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocaleContext() {
  return useContext(LocaleContext)
}
