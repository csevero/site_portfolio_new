import { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Header } from '../components/Header'
import { database } from '../services/firebase'
import GlobalStyle from '../styles/global'

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
    <>
      <Header />
      <Component {...pageProps} views={views} />
      <GlobalStyle />
      <ToastContainer />
    </>
  )
}

export default MyApp
