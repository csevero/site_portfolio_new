import { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Header } from '../components/Header'
import { StylesProvider } from '../contexts/StylesContext'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { database } from '../services/firebase'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [instance, setInstance] = useState(false)
  const [views, setViews] = useState()

  useEffect(() => {
    async function getViews() {
      if (!instance && !process.env.NODE_ENV.includes('dev')) {
        const oldViews = await database.ref('views').get()
        const newViews = oldViews.val().number + 1
        await database.ref('views').update({ number: newViews }, error => {
          if (error) {
            console.log(error)
          }
          setViews(newViews)
          setInstance(true)
        })
      }
    }

    getViews()
  }, [])

  return (
    <StylesProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} views={views} />
        <GlobalStyle />
        <ToastContainer />
      </ThemeProvider>
    </StylesProvider>
  )
}

export default MyApp
