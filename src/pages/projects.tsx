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
import { Container } from '../styles/pages/Projects'

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
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.5 }}
          >
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
          </motion.div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.8 }}
          >
            <Card
              title="Site - Spider Man"
              subject="Site feito durante uma imersão, foi refeito utilizando tecnologias atuais"
              accessOnGithub="#"
              accessSite="#"
            >
              <TsIcon />
              <ReactIcon />
            </Card>
          </motion.div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 1.1 }}
          >
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
          </motion.div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 1.4 }}
          >
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
          </motion.div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 1.7 }}
          >
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
          </motion.div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 2.0 }}
          >
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
          </motion.div>
          <ButtonCustom
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 2.3 }}
            width="150px"
            className="button-github"
          >
            Ver mais no Github
          </ButtonCustom>
        </div>
      </Container>
    </>
  )
}

export default Projects
