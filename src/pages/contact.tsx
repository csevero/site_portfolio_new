import { Player } from '@lottiefiles/react-lottie-player'
import Head from 'next/head'
import React from 'react'
import SendEmail from '../assets/json/email-send.json'
import GitIcon from '../assets/vector/github.svg'
import InstaIcon from '../assets/vector/instagram1.svg'
import LinkedinIcon from '../assets/vector/linkedin.svg'
import { AnchorButton } from '../components/AnchorButton'
import { useLocaleContext } from '../contexts/locale'
import { Container } from '../styles/commonStyles'
import { FirstSection, Wrapper } from '../styles/pages/Contact'

const Contact: React.FC = () => {
  const { getLanguage } = useLocaleContext()
  const translate = getLanguage()

  return (
    <>
      <Head>
        <title>{translate.contactsPage.title}</title>
      </Head>
      <Container>
        <Wrapper>
          <FirstSection>
            <h1>{translate.contactsPage.title}</h1>
            <h2>{translate.contactsPage.subTitle}</h2>

            <span>EMAIL</span>
            <AnchorButton
              link={`mailto:severo.e.carlos@gmail.com?subject=${translate.aboutPage.contentInfo.emailSubject}&body=${translate.aboutPage.contentInfo.emailBody}`}
            >
              severo.e.carlos@gmail.com
            </AnchorButton>

            <div className="social-networks">
              <span>{translate.contactsPage.socialNetworks}</span>
              <div className="links">
                <AnchorButton
                  className="github-icon"
                  link="https://github.com/csevero"
                >
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
