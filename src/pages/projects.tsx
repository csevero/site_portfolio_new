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
import { Container } from '../styles/commonStyles'
import { Wrapper } from '../styles/pages/Projects'

const Projects: React.FC = () => {
  const theme = useContext(ThemeContext)
  return (
    <>
      <Head>
        <title>Projetos</title>
      </Head>
      <Container>
        <Wrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
        >
          <h1>Projetos</h1>
          <div className="projects">
            <Card
              title="Site - Impactos Car"
              subject="Site de uma funilaria, feito para
            aprimorar conhecimentos"
              accessOnGithub="https://github.com/kissinger156/site_bodyShop"
              accessSite="https://impactos-car.netlify.app/"
              icons={[TsIcon, ReactIcon]}
            />

            <Card
              title="Site - Spider Man"
              subject="Site feito durante uma imersão, foi refeito utilizando tecnologias atuais"
              accessOnGithub="https://github.com/kissinger156/site_project_spiderman-React"
              accessSite="https://spiderman-milesmorales-react.netlify.app/"
              icons={[TsIcon, ReactIcon]}
            />

            <Card
              title="Sistema - Delivery DS"
              subject="Projeto feito durante uma imersão, usado tecnologias para Front e Backend"
              accessOnGithub="https://github.com/kissinger156/project_devSuperior"
              accessSite="https://deliveryds-sds2.netlify.app/"
              icons={[TsIcon, ReactIcon, JavaIcon]}
            />

            <Card
              title="Sistema - Prova Técnica"
              subject="Projeto feito durante uma seleção feita
            para ingressar na empresa Slide Works"
              accessOnGithub="https://github.com/kissinger156/prova_tecnica_slide_works"
              accessSite="https://prova-tecnica-slide-works.netlify.app/"
              icons={[TsIcon, ReactIcon, NodeIcon]}
            />

            <Card
              title="Projeto - Chat RealTime"
              subject="Projeto feito durante a imersão oferecida
            pela Rocketseat. NLW-5"
              accessOnGithub="https://github.com/kissinger156/nlw_5"
              icons={[TsIcon, ReactIcon, SocketIcon]}
            />

            <Card
              title="Projeto - Pesquisa NPS"
              subject="Projeto feito durante a imersão oferecida
            pela Rocketseat. NLW-4"
              accessOnGithub="https://github.com/kissinger156/nlw4_node"
              icons={[TsIcon, NodeIcon]}
            />
          </div>
          <div className="button">
            <AnchorButton
              style={{ background: theme.colors.green }}
              link="https://github.com/kissinger156?tab=repositories"
            >
              Ver mais no Github
            </AnchorButton>
          </div>
        </Wrapper>
      </Container>
    </>
  )
}

export default Projects
