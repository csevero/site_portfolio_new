import { Player } from '@lottiefiles/react-lottie-player'
import Head from 'next/head'
import React, { useEffect } from 'react'
import GitIcon from '../assets/vector/github.svg'
import InstagramIcon from '../assets/vector/instagram1.svg'
import LinkedinIcon from '../assets/vector/linkedin.svg'
import MailIcon from '../assets/vector/mail1.svg'
import WhatsIcon from '../assets/vector/whatsapp.svg'
import { Button } from '../components/Button'
import { Container, FirstSection } from '../styles/pages/Home'

import Typewriter from 'typewriter-effect/dist/core'

const Home: React.FC = () => {
  useEffect(() => {
    const typing = document.getElementById('typing')

    const typewriter = new Typewriter(typing, { loop: true })

    typewriter
      .typeString('Dev. React JS')
      .pauseFor(1000)
      .deleteAll()
      .typeString('Dev. Node JS')
      .pauseFor(1000)
      .deleteAll()
      .typeString('Dev. Next JS')
      .pauseFor(1000)
      .deleteAll()
      .typeString('Youtuber')
      .pauseFor(1000)
      .deleteAll()
      .start()
  }, [])
  return (
    <>
      <Head>
        <title>Olá!</title>
      </Head>

      <Container>
        <FirstSection>
          <h2>Prazer, eu sou o Carlos</h2>
          <h1 id="typing"></h1>
          <Button href="/about">Mais sobre mim</Button>
          <div className="social-networks">
            <a href="#">
              <MailIcon />
            </a>
            <a href="#">
              <GitIcon />
            </a>
            <a href="#">
              <LinkedinIcon />
            </a>
            <a href="#">
              <WhatsIcon />
            </a>
            <a href="#">
              <InstagramIcon />
            </a>
          </div>
        </FirstSection>
        <Player
          src="https://assets8.lottiefiles.com/private_files/lf30_WdTEui.json"
          autoplay
          loop
          style={{ height: '450px', width: '450px' }}
          className="main-gif"
        />
      </Container>
    </>
  )
}

export default Home
