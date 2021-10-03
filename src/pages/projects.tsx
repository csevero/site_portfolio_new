import Head from 'next/head'
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import JavaIcon from '../assets/vector/java.svg'
import NodeIcon from '../assets/vector/node.svg'
import ReactIcon from '../assets/vector/reactjs.svg'
import SocketIcon from '../assets/vector/socket-io.svg'
import TsIcon from '../assets/vector/typescript.svg'
import { AnchorButton } from '../components/AnchorButton'
import { Card } from '../components/ProjectsCard/Card'
import { getLanguage } from '../helpers/getLanguage'
import { Container } from '../styles/commonStyles'
import { Wrapper } from '../styles/pages/Projects'

const Projects: React.FC = () => {
  const theme = useContext(ThemeContext)
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
              accessOnGithub="https://github.com/kissinger156/site_bodyShop"
              accessSite="https://impactos-car.netlify.app/"
              icons={[TsIcon, ReactIcon]}
            />

            <Card
              title={translate.projectsPage.secondProject.title}
              subject={translate.projectsPage.secondProject.subject}
              accessOnGithub="https://github.com/kissinger156/site_project_spiderman-React"
              accessSite="https://spiderman-milesmorales-react.netlify.app/"
              icons={[TsIcon, ReactIcon]}
            />

            <Card
              title={translate.projectsPage.thirdProject.title}
              subject={translate.projectsPage.thirdProject.subject}
              accessOnGithub="https://github.com/kissinger156/project_devSuperior"
              accessSite="https://deliveryds-sds2.netlify.app/"
              icons={[TsIcon, ReactIcon, JavaIcon]}
            />

            <Card
              title={translate.projectsPage.fourthProject.title}
              subject={translate.projectsPage.fourthProject.subject}
              accessOnGithub="https://github.com/kissinger156/prova_tecnica_slide_works"
              accessSite="https://prova-tecnica-slide-works.netlify.app/"
              icons={[TsIcon, ReactIcon, NodeIcon]}
            />

            <Card
              title={translate.projectsPage.fifthProject.title}
              subject={translate.projectsPage.fifthProject.subject}
              accessOnGithub="https://github.com/kissinger156/nlw_5"
              icons={[TsIcon, ReactIcon, SocketIcon]}
            />

            <Card
              title={translate.projectsPage.sixthProject.title}
              subject={translate.projectsPage.sixthProject.subject}
              accessOnGithub="https://github.com/kissinger156/nlw4_node"
              icons={[TsIcon, NodeIcon]}
            />
          </div>
          <div className="button">
            <AnchorButton
              style={{ background: theme.colors.green }}
              link="https://github.com/kissinger156?tab=repositories"
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
