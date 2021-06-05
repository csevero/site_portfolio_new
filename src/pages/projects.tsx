import { motion } from 'framer-motion'
import Head from 'next/head'
import React from 'react'
import JavaIcon from '../assets/vector/java.svg'
import NodeIcon from '../assets/vector/node.svg'
import ReactIcon from '../assets/vector/reactjs.svg'
import SocketIcon from '../assets/vector/socket-io.svg'
import TsIcon from '../assets/vector/typescript.svg'
import { ButtonCustom } from '../components/Button/style'
import { Card } from '../components/ProjectsCard/Card'
import { Wrapper } from '../styles/pages/Projects'
import { Container } from '../styles/global'
import { Button } from '../components/Button'
import theme from '../styles/theme'

const Projects: React.FC = () => {
  return (
    <>
      <Head>
        <title>Projetos</title>
      </Head>
      <Container>
        <Wrapper>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
          >
            Projetos
          </motion.h1>
          <div className="projects">
            <Card
              title="Site - Impactos Car"
              subject="Site de uma funilaria, feito para
            aprimorar conhecimentos"
              accessOnGithub="https://github.com/kissinger156/site_bodyShop"
              accessSite="https://impactos-car.netlify.app/"
              delay={0.5}
            >
              <TsIcon />
              <ReactIcon />
            </Card>

            <Card
              title="Site - Spider Man"
              subject="Site feito durante uma imersão, foi refeito utilizando tecnologias atuais"
              accessOnGithub="https://github.com/kissinger156/site_project_spiderman-React"
              accessSite="https://spiderman-milesmorales-react.netlify.app/"
              delay={0.8}
            >
              <TsIcon />
              <ReactIcon />
            </Card>

            <Card
              title="Sistema - Delivery DS"
              subject="Projeto feito durante uma imersão, usado tecnologias para Front e Backend"
              accessOnGithub="https://github.com/kissinger156/project_devSuperior"
              accessSite="https://deliveryds-sds2.netlify.app/"
              delay={1.1}
            >
              <TsIcon />
              <ReactIcon />
              <JavaIcon />
            </Card>

            <Card
              title="Sistema - Prova Técnica"
              subject="Projeto feito durante uma seleção feita
            para ingressar na empresa Slide Works"
              accessOnGithub="https://github.com/kissinger156/prova_tecnica_slide_works"
              accessSite="https://prova-tecnica-slide-works.netlify.app/"
              delay={1.4}
            >
              <TsIcon />
              <ReactIcon />
              <NodeIcon />
            </Card>

            <Card
              title="Projeto - Chat RealTime"
              subject="Projeto feito durante a imersão oferecida
            pela Rocketseat. NLW-5"
              accessOnGithub="https://github.com/kissinger156/nlw_5"
              delay={1.7}
            >
              <TsIcon />
              <NodeIcon />
              <SocketIcon />
            </Card>

            <Card
              title="Projeto - Pesquisa NPS"
              subject="Projeto feito durante a imersão oferecida
            pela Rocketseat. NLW-4"
              accessOnGithub="https://github.com/kissinger156/nlw4_node"
              delay={2}
            >
              <TsIcon />
              <NodeIcon />
            </Card>

            <ButtonCustom
              width="200px"
              href="https://github.com/kissinger156?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              backgroundColor={theme.colors.green}
            >
              Ver mais no Github
            </ButtonCustom>
          </div>
        </Wrapper>
      </Container>
    </>
  )
}

export default Projects
