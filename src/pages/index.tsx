import { Player } from '@lottiefiles/react-lottie-player'
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
import { database } from '../services/firebase'
import { Container } from '../styles/commonStyles'
import { FirstSection, Wrapper } from '../styles/pages/Home'
import { AnchorButton } from '../components/AnchorButton'
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
        <Wrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
        >
          <FirstSection>
            <h2>Prazer, eu sou o Carlos</h2>
            <h1 id="typing" />
            <Button width="190px" link="/about">
              Mais sobre mim
            </Button>
            <div className="social-networks">
              <AnchorButton link="mailto:severo.e.carlos@gmail.com?subject=Olá Carlos&body=Escreva sua mensagem aqui ou abaixo">
                <MailIcon />
              </AnchorButton>
              <AnchorButton link="https://github.com/kissinger156">
                <GitIcon />
              </AnchorButton>
              <AnchorButton link="https://www.linkedin.com/in/carlos-severo-634271162/">
                <LinkedinIcon />
              </AnchorButton>
              <AnchorButton link="https://api.whatsapp.com/send?phone=5515996605712&text=Ol%C3%A1%20Carlos%2C%20vim%20pelo%20seu%20site!">
                <WhatsIcon />
              </AnchorButton>
              <AnchorButton link="https://www.instagram.com/carlosedu156/">
                <InstagramIcon />
              </AnchorButton>
            </div>
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
