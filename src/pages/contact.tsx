import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import SendEmail from '../assets/json/email-send.json'
import GitIcon from '../assets/vector/github.svg'
import InstaIcon from '../assets/vector/instagram1.svg'
import LinkedinIcon from '../assets/vector/linkedin.svg'
import { FirstSection, Wrapper } from '../styles/pages/Contact'
import Head from 'next/head'
import { Container } from '../styles/global'

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contato</title>
      </Head>
      <Container>
        <Wrapper>
          <FirstSection>
            <h1>Contato</h1>
            <h2>
              Para entrar em contato comigo, basta selecionar uma das opções
              abaixo
            </h2>

            <span>EMAIL</span>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="mailto:severo.e.carlos@gmail.com?subject=Olá Carlos&body=Escreva sua mensagem aqui ou abaixo"
            >
              severo.e.carlos@gmail.com
            </a>

            <span>WHATSAPP</span>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5515996605712&text=Ol%C3%A1%20Carlos%2C%20vim%20pelo%20seu%20site!"
            >
              (15)99660-5712
            </a>

            <div className="social-networks">
              <span>REDES SOCIAIS</span>
              <div className="links">
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
                  href="https://www.instagram.com/carlosedu156/"
                >
                  <InstaIcon />
                </a>
              </div>
            </div>
          </FirstSection>
          <Player
            src={SendEmail}
            autoplay
            loop
            style={{ height: '400px', width: '400px' }}
            className="main-gif"
          />
        </Wrapper>
      </Container>
    </>
  )
}

export default Contact
