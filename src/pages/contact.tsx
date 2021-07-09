import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import SendEmail from '../assets/json/email-send.json'
import GitIcon from '../assets/vector/github.svg'
import InstaIcon from '../assets/vector/instagram1.svg'
import LinkedinIcon from '../assets/vector/linkedin.svg'
import { FirstSection, Wrapper } from '../styles/pages/Contact'
import Head from 'next/head'
import { Container } from '../styles/commonStyles'
import { AnchorButton } from '../components/AnchorButton'

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
            <AnchorButton link="mailto:severo.e.carlos@gmail.com?subject=Olá Carlos&body=Escreva sua mensagem aqui ou abaixo">
              severo.e.carlos@gmail.com
            </AnchorButton>

            <span>WHATSAPP</span>
            <AnchorButton link="https://api.whatsapp.com/send?phone=5515996605712&text=Ol%C3%A1%20Carlos%2C%20vim%20pelo%20seu%20site!">
              (15)99660-5712
            </AnchorButton>

            <div className="social-networks">
              <span>REDES SOCIAIS</span>
              <div className="links">
                <AnchorButton link="https://github.com/kissinger156">
                  <GitIcon />
                </AnchorButton>

                <AnchorButton link="https://www.linkedin.com/in/carlos-severo-634271162/">
                  <LinkedinIcon />
                </AnchorButton>

                <AnchorButton link="https://www.instagram.com/carlosedu156/">
                  <InstaIcon />
                </AnchorButton>
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
