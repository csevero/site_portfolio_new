import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import { Header } from '../components/Header'
import StylesProvider from '../contexts/StylesContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <StylesProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </StylesProvider>
  )
}

export default MyApp
