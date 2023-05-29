import { Player } from '@lottiefiles/react-lottie-player'
import Head from 'next/head'
import React from 'react'
import NotFound from '../assets/json/not-found.json'
import { ButtonLink } from '../components/Button'
import { useLocaleContext } from '../contexts/locale'
import { Container } from '../styles/commonStyles'
import { Wrapper } from '../styles/pages/Error'

const Error: React.FC = () => {
  const { getLanguage } = useLocaleContext()
  const translate = getLanguage()

  return (
    <>
      <Head>
        <title>{translate.notFoundPage.title}</title>
      </Head>
      <Container>
        <Wrapper>
          <div>
            <Player
              src={NotFound}
              autoplay
              loop
              style={{ height: '350px', width: '500px' }}
              className="main-gif"
            />
            <ButtonLink prefetch={false} link="/">
              {translate.notFoundPage.backToSecurity}
            </ButtonLink>
          </div>
        </Wrapper>
      </Container>
    </>
  )
}

export default Error
