import { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Header } from '../components/Header'
import { StylesProvider } from '../contexts/StylesContext'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <StylesProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <GlobalStyle />
        <ToastContainer />
      </ThemeProvider>
    </StylesProvider>
  )
}

export default MyApp
