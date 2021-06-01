import { motion } from 'framer-motion'
import Head from 'next/head'
import React from 'react'
import { Card } from '../components/ProjectsCard/Card'
import { Container } from '../styles/pages/Projects'
import JavaIcon from '../assets/vector/java.svg'
import NodeIcon from '../assets/vector/node.svg'
import ReactIcon from '../assets/vector/reactjs.svg'
import TsIcon from '../assets/vector/typescript.svg'
import SocketIcon from '../assets/vector/socket-io.svg'

const Projects: React.FC = () => {
  return (
    <>
      <Head>
        <title>Projetos</title>
      </Head>
      <Container>
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
            accessOnGithub="#"
            accessSite="#"
          >
            <TsIcon />
            <ReactIcon />
          </Card>
          <Card
            title="Site - Spider Man"
            subject="Site feito durante uma imersão, foi refeito utilizando tecnologias atuais"
            accessOnGithub="#"
            accessSite="#"
          >
            <TsIcon />
            <ReactIcon />
          </Card>
          <Card
            title="Sistema - Delivery DS"
            subject="Projeto feito durante uma imersão, usado tecnologias para Front e Backend"
            accessOnGithub="#"
            accessSite="#"
          >
            <TsIcon />
            <ReactIcon />
            <JavaIcon />
          </Card>
          <Card
            title="Sistema - Prova Técnica"
            subject="Projeto feito durante uma seleção feita
            para ingressar na empresa Slide Works"
            accessOnGithub="#"
            accessSite="#"
          >
            <TsIcon />
            <ReactIcon />
            <NodeIcon />
          </Card>
          <Card
            title="Projeto - Chat RealTime"
            subject="Projeto feito durante a imersão oferecida
            pela Rocketseat. NLW-5"
            accessOnGithub="#"
            // accessSite="#"
          >
            <TsIcon />
            <NodeIcon />
            <SocketIcon />
          </Card>
          <Card
            title="Projeto - Pesquisa NPS"
            subject="Projeto feito durante a imersão oferecida
            pela Rocketseat. NLW-4"
            accessOnGithub="#"
            // accessSite="#"
          >
            <TsIcon />
            <NodeIcon />
          </Card>
        </div>
      </Container>
    </>
  )
}

export default Projects
