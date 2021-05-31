import React from 'react'
import { Container } from '../styles/pages/About'
import perfilImg from '../assets/images/perfil.png'
import { motion } from 'framer-motion'

const About: React.FC = () => {
  return (
    <Container>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 0.5 }}
      >
        Sobre mim
      </motion.h1>
      <section className="about-infos">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.5, delay: 0.5 }}
          src={perfilImg}
          alt="perfil"
        />

        <div className="infos">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 0.5, delay: 1.0 }}
          >
            Olá, eu sou o carlos
          </motion.span>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 0.5, delay: 1.3 }}
          >
            Eu sou desenvolvedor, atualmente utilizo NodeJS ReactJS e NextJS em
            meus projetos, mas futuramente pretendo extender meus conhecimentos
            para outras tecnologias. Meu foco atual é desenvolver aplicações Web
            e aplicações Backend. Sou uma pessoa focada, pró ativa e sempre
            aberto a novas oportunidades e aprender coisas novas. Ah e não menos
            importante tenho um canal no Youtube de motovlog!
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 0.5, delay: 1.6 }}
            className="links"
          >
            <span className="link">
              <b>Nome: </b>Carlos Eduardo Severo
            </span>
            <span className="link">
              <b>Email: </b>
              <a href="#">severo.e.carlos@gmail.com</a>
            </span>
            <span className="link">
              <b>Whatsapp: </b>
              <a href="#">(15)99660-5712</a>
            </span>
            <span className="link">
              <b>Trabalho: </b>
              Desenvolvedor na{' '}
              <a href="#">
                <b> Slide Works</b>
              </a>
            </span>
            <span className="link">
              <b>Youtube: </b>
              <a href="#">Carlos Severo</a>
            </span>
          </motion.div>
        </div>
      </section>
    </Container>
  )
}

export default About
