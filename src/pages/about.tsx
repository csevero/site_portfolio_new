import Head from 'next/head'
import React from 'react'
import perfilImg from '../assets/images/perfil.png'
import { useLocaleContext } from '../contexts/locale'
import { Container } from '../styles/commonStyles'
import { Wrapper } from '../styles/pages/About'

const About: React.FC = () => {
  const { getLanguage } = useLocaleContext()
  const translate = getLanguage()

  return (
    <>
      <Head>
        <title>{translate.aboutPage.title}</title>
      </Head>
      <Container>
        <Wrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
        >
          <h1>{translate.aboutPage.title}</h1>
          <section className="about-infos">
            <img src={perfilImg} alt="perfil" />

            <div className="infos">
              <span>{translate.aboutPage.subTitle}</span>
              <p>{translate.aboutPage.information}</p>

              <div className="links">
                <span className="link">
                  <b>{translate.aboutPage.contentInfo.name} </b>Carlos Eduardo
                  Severo
                </span>
                <span className="link">
                  <b>Email: </b>
                  <a
                    href={`mailto:severo.e.carlos@gmail.com?subject=${translate.aboutPage.contentInfo.emailSubject}&body=${translate.aboutPage.contentInfo.emailBody}`}
                  >
                    severo.e.carlos@gmail.com
                  </a>
                </span>
                <span className="link">
                  <b>{translate.aboutPage.contentInfo.work} </b>
                  {translate.aboutPage.contentInfo.workOn}{' '}
                  <a href={`https://slideworks.cc/${translate.locale}`}>
                    <b> Slide Works</b>
                  </a>
                </span>
                <span className="link">
                  <b>Youtube: </b>
                  <a href="https://www.youtube.com/channel/UCFcuIk6AjU_eiLZaTjJA8kA">
                    Carlos Severo
                  </a>
                </span>
              </div>
            </div>
          </section>
        </Wrapper>
      </Container>
    </>
  )
}

export default About
