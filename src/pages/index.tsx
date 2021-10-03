import { Player } from '@lottiefiles/react-lottie-player'
import Head from 'next/head'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from 'styled-components'
import Typewriter from 'typewriter-effect/dist/core'
import BoyCoding from '../assets/json/boy-coding.json'
import GitIcon from '../assets/vector/github.svg'
import InstagramIcon from '../assets/vector/instagram1.svg'
import LinkedinIcon from '../assets/vector/linkedin.svg'
import MailIcon from '../assets/vector/mail1.svg'
import WhatsIcon from '../assets/vector/whatsapp.svg'
import { AnchorButton } from '../components/AnchorButton'
import { ModalFeedback } from '../components/ModalFeedback'
import { getLanguage } from '../helpers/getLanguage'
import { Container } from '../styles/commonStyles'
import { FirstSection, Wrapper } from '../styles/pages/Home'

interface IHomeProps {
  views: number
}

const Home: React.FC<IHomeProps> = ({ views }) => {
  const [openModal, setOpenModal] = useState(false)
  const theme = useContext(ThemeContext)
  const translate = getLanguage()

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
        <title>{translate.homePage.title}</title>
      </Head>

      <Container>
        <Wrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
        >
          <FirstSection>
            <h2>{translate.homePage.subTitle}</h2>
            <h1 id="typing" />
            <div className="actions-button">
              <Link href="/about">
                {translate.homePage.buttons.moreAboutMe}
              </Link>
              <button
                style={{ marginTop: '10px', background: theme.colors.green }}
                onClick={() => setOpenModal(true)}
              >
                {translate.homePage.buttons.feedback}
              </button>
            </div>
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
              {new Date().toLocaleDateString(translate.locale, {
                dateStyle: 'long'
              })}{' '}
              - {translate.homePage.totalVisits} {views ? views : '...'}
            </span>
          </div>
        </Wrapper>
        {openModal && <ModalFeedback setIsOpen={setOpenModal} />}
      </Container>
    </>
  )
}

export default Home
