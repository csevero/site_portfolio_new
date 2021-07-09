import { Player } from '@lottiefiles/react-lottie-player'
import { motion } from 'framer-motion'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect/dist/core'
import BoyCoding from '../assets/json/boy-coding.json'
import GitIcon from '../assets/vector/github.svg'
import InstagramIcon from '../assets/vector/instagram1.svg'
import LinkedinIcon from '../assets/vector/linkedin.svg'
import MailIcon from '../assets/vector/mail1.svg'
import WhatsIcon from '../assets/vector/whatsapp.svg'
import { Button } from '../components/Button'
import { Container } from '../styles/global'
import { FirstSection, Wrapper } from '../styles/pages/Home'
import { database, firebase } from '../services/firebase'

const Home: React.FC = () => {
  const [views, setViews] = useState()
  useEffect(() => {
    async function getViews() {
      const oldViews = await database.ref('views').get()
      const newViews = oldViews.val().number + 1

      await database.ref('views').update({ number: newViews })
      setViews(newViews)
    }

    getViews()
  }, [])

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
        <Wrapper>
          <FirstSection>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeOut', duration: 0.5 }}
            >
              Prazer, eu sou o Carlos
            </motion.h2>
            <motion.h1
              id="typing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeOut', duration: 0.5, delay: 0.3 }}
            ></motion.h1>
            <Button link="/about">Mais sobre mim</Button>
            <motion.div
              className="social-networks"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeOut', duration: 0.8, delay: 0.8 }}
            >
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="mailto:severo.e.carlos@gmail.com?subject=Olá Carlos&body=Escreva sua mensagem aqui ou abaixo"
              >
                <MailIcon />
              </a>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://github.com/kissinger156"
              >
                <GitIcon />
              </a>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://www.linkedin.com/in/carlos-severo-634271162/"
              >
                <LinkedinIcon />
              </a>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5515996605712&text=Ol%C3%A1%20Carlos%2C%20vim%20pelo%20seu%20site!"
              >
                <WhatsIcon />
              </a>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://www.instagram.com/carlosedu156/"
              >
                <InstagramIcon />
              </a>
            </motion.div>
          </FirstSection>
          <Player
            src={BoyCoding}
            autoplay
            loop
            style={{ height: '450px', width: '450px' }}
            className="main-gif"
          />
          <div className="view-count">
            <span>
              {new Date().toLocaleDateString('pt-BR', { dateStyle: 'long' })} -
              Total de visitas {views}
            </span>
          </div>
        </Wrapper>
      </Container>
    </>
  )
}

export default Home
