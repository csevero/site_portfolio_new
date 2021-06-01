import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import SendEmail from '../assets/json/email-send.json'
import GitIcon from '../assets/vector/github.svg'
import InstaIcon from '../assets/vector/instagram1.svg'
import LinkedinIcon from '../assets/vector/linkedin.svg'
import { Container, FirstSection, Wrapper } from '../styles/pages/Contact'

const Contact: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <FirstSection>
          <h1>Contato</h1>
          <h2>
            Para entrar em contato comigo, basta selecionar uma das opções
            abaixo
          </h2>

          <span>EMAIL</span>
          <a href="#">severo.e.carlos@gmail.com</a>

          <span>WHATSAPP</span>
          <a href="#">(15)99660-5712</a>

          <div className="social-networks">
            <span>REDES SOCIAIS</span>
            <div className="links">
              <a href="#">
                <GitIcon />
              </a>
              <a href="#">
                <LinkedinIcon />
              </a>
              <a href="#">
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
  )
}

export default Contact
