import { Player } from '@lottiefiles/react-lottie-player'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect/dist/core'
import BoyCoding from '../assets/json/boy-coding.json'
import CurriculumIcon from '../assets/vector/curriculum.svg'
import GitIcon from '../assets/vector/github.svg'
import InstagramIcon from '../assets/vector/instagram1.svg'
import LinkedinIcon from '../assets/vector/linkedin.svg'
import MailIcon from '../assets/vector/mail1.svg'
import { AnchorButton } from '../components/AnchorButton'
import { ModalFeedback } from '../components/ModalFeedback'
import { useLocaleContext } from '../contexts/locale'
import { Container } from '../styles/commonStyles'
import { FirstSection, Wrapper } from '../styles/pages/Home'

interface IHomeProps {
  views: number
}

const Home: React.FC<IHomeProps> = ({ views }) => {
  const [openModal, setOpenModal] = useState(false)
  const { getLanguage } = useLocaleContext()
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
      .typeString('Dev. Twilio')
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
                style={{
                  marginTop: '10px',
                  background: 'var(--color-green-1)'
                }}
                onClick={() => setOpenModal(true)}
              >
                {translate.homePage.buttons.feedback}
              </button>
            </div>
            <div className="social-networks">
              <AnchorButton
                link="mailto:severo.e.carlos@gmail.com?subject=Olá Carlos&body=Escreva sua mensagem aqui ou abaixo"
                title="E-mail"
              >
                <MailIcon />
              </AnchorButton>
              <AnchorButton
                className="github-icon"
                link="https://github.com/csevero"
                title="Github"
              >
                <GitIcon />
              </AnchorButton>
              <AnchorButton
                link="https://www.linkedin.com/in/carlos-severo-634271162/"
                title="Linkedin"
              >
                <LinkedinIcon />
              </AnchorButton>
              <AnchorButton
                link="https://www.instagram.com/carlosedu156/"
                title="Instagram"
              >
                <InstagramIcon />
              </AnchorButton>
              <AnchorButton
                link={
                  translate.locale === 'en'
                    ? '/Carlos_Severo-En.pdf'
                    : '/Carlos_Severo-Pt_BR.pdf'
                }
                title={translate.anchorLinksTitle.curriculum}
              >
                <CurriculumIcon />
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
              - {translate.homePage.totalVisits} {views || '...'}
            </span>
          </div>
        </Wrapper>
        {openModal && <ModalFeedback setIsOpen={setOpenModal} />}
      </Container>
    </>
  )
}

export default Home
