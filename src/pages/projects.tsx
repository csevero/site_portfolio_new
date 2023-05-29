import Head from 'next/head'
import React from 'react'
import HerokuIcon from '../assets/vector/heroku.svg'
import JavaIcon from '../assets/vector/java.svg'
import NextIcon from '../assets/vector/nextjs.svg'
import NodeIcon from '../assets/vector/node.svg'
import ReactIcon from '../assets/vector/reactjs.svg'
import SocketIcon from '../assets/vector/socket-io.svg'
import TsIcon from '../assets/vector/typescript.svg'
import { AnchorButton } from '../components/AnchorButton'
import { Card } from '../components/ProjectsCard/Card'
import { useLocaleContext } from '../contexts/locale'
import { Container } from '../styles/commonStyles'
import { Wrapper } from '../styles/pages/Projects'

const Projects: React.FC = () => {
  const { getLanguage } = useLocaleContext()
  const translate = getLanguage()

  return (
    <>
      <Head>
        <title>{translate.projectsPage.title}</title>
      </Head>
      <Container>
        <Wrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
        >
          <h1>{translate.projectsPage.title}</h1>
          <div className="projects">
            <Card
              title={translate.projectsPage.firstProject.title}
              subject={translate.projectsPage.firstProject.subject}
              accessOnGithub="https://github.com/csevero/site_bodyShop"
              accessSite="https://impactos-car.netlify.app/"
              icons={[TsIcon, ReactIcon]}
            />
            <Card
              title={translate.projectsPage.secondProject.title}
              subject={translate.projectsPage.secondProject.subject}
              accessOnGithub="https://github.com/csevero/site_project_spiderman-React"
              accessSite="https://spiderman-milesmorales-react.netlify.app/"
              icons={[TsIcon, ReactIcon]}
            />

            <Card
              title={translate.projectsPage.thirdProject.title}
              subject={translate.projectsPage.thirdProject.subject}
              accessOnGithub="https://github.com/csevero/project_devSuperior"
              accessSite="https://deliveryds-sds2.netlify.app/"
              icons={[TsIcon, ReactIcon, JavaIcon, HerokuIcon]}
            />

            <Card
              title={translate.projectsPage.fourthProject.title}
              subject={translate.projectsPage.fourthProject.subject}
              accessOnGithub="https://github.com/csevero/prova_tecnica_slide_works"
              accessSite="https://prova-tecnica-slide-works.netlify.app/"
              icons={[TsIcon, ReactIcon, NodeIcon]}
            />

            <Card
              title={translate.projectsPage.fifthProject.title}
              subject={translate.projectsPage.fifthProject.subject}
              accessOnGithub="https://github.com/csevero/nlw_5"
              icons={[TsIcon, ReactIcon, SocketIcon]}
            />

            <Card
              title={translate.projectsPage.sixthProject.title}
              subject={translate.projectsPage.sixthProject.subject}
              accessOnGithub="https://github.com/csevero/nlw4_node"
              icons={[TsIcon, NodeIcon]}
            />

            <Card
              title={translate.projectsPage.seventhProject.title}
              subject={translate.projectsPage.seventhProject.subject}
              accessSite="https://discord-community-manager.vercel.app"
              icons={[TsIcon, NextIcon]}
            />

            <Card
              title={translate.projectsPage.eighthProject.title}
              subject={translate.projectsPage.eighthProject.subject}
              accessSite="https://cpfl-segunda-via.vercel.app/"
              accessOnGithub="https://github.com/csevero/get-duplicate-CPFL-bill"
              icons={[TsIcon, NextIcon]}
            />
          </div>
          <div className="button">
            <AnchorButton
              style={{ background: 'var(--color-green-1)' }}
              link="https://github.com/csevero?tab=repositories"
            >
              {translate.projectsPage.seeMoreOnGithub}
            </AnchorButton>
          </div>
        </Wrapper>
      </Container>
    </>
  )
}

export default Projects
