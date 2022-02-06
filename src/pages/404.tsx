import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/commonStyles'
import { Wrapper } from '../styles/pages/Error'
import { Player } from '@lottiefiles/react-lottie-player'
import NotFound from '../assets/json/not-found.json'
import { getLanguage } from '../helpers/getLanguage'
import { ButtonLink } from '../components/Button'

const Error: React.FC = () => {
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
