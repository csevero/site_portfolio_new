import { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Header } from '../components/Header'
import { database } from '../services/firebase'
import GlobalStyle from '../styles/global'
import { LocaleProvider } from '../contexts/locale'
import { useRouter } from 'next/router'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [instance, setInstance] = useState(false)
  const [activeTheme, setActiveTheme] = useState('light')
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light'
  const [views, setViews] = useState()
  const router = useRouter()

  useEffect(() => {
    async function getViews() {
      if (!instance && !process.env.NODE_ENV.includes('dev')) {
        const oldViews = await database.ref('views').get()
        const newViews = oldViews.val().number + 1
        await database
          .ref('views')
          .update({ number: newViews, lastUpdatedDate: new Date() }, error => {
            if (error) {
              console.warn('Error to update firebase', error)
            }
            setViews(newViews)
            setInstance(true)
          })
      }
    }

    getViews()

    const saveTheme = localStorage.getItem('theme')

    saveTheme && setActiveTheme(saveTheme)
  }, [])

  useEffect(() => {
    document.body.dataset.theme = activeTheme

    localStorage.setItem('theme', activeTheme)
  }, [activeTheme])

  return (
    <LocaleProvider>
      <Header themeInfo={{ activeTheme, inactiveTheme, setActiveTheme }} />
      <Component {...pageProps} {...(router.pathname === '/' && { views })} />
      <GlobalStyle />
      <ToastContainer />
    </LocaleProvider>
  )
}

export default MyApp
