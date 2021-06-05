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
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.5 }}
            >
              <Card
                title="Site - Impactos Car"
                subject="Site de uma funilaria, feito para
            aprimorar conhecimentos"
                accessOnGithub="https://github.com/kissinger156/site_bodyShop"
                accessSite="https://impactos-car.netlify.app/"
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
                accessOnGithub="https://github.com/kissinger156/site_project_spiderman-React"
                accessSite="https://spiderman-milesmorales-react.netlify.app/"
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
                accessOnGithub="https://github.com/kissinger156/project_devSuperior"
                accessSite="https://deliveryds-sds2.netlify.app/"
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
                accessOnGithub="https://github.com/kissinger156/prova_tecnica_slide_works"
                accessSite="https://prova-tecnica-slide-works.netlify.app/"
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
                accessOnGithub="https://github.com/kissinger156/nlw_5"
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
                accessOnGithub="https://github.com/kissinger156/nlw4_node"
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
              href="https://github.com/kissinger156?tab=repositories"
              rel="noreferrer noopener"
              target="_blank"
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
