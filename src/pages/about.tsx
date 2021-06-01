import React from 'react'
import { Container } from '../styles/pages/About'
import perfilImg from '../assets/images/perfil.png'
import { motion } from 'framer-motion'
import Head from 'next/head'

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>Sobre mim</title>
      </Head>
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
              Eu sou desenvolvedor, atualmente utilizo NodeJS ReactJS e NextJS
              em meus projetos, mas futuramente pretendo extender meus
              conhecimentos para outras tecnologias. Meu foco atual é
              desenvolver aplicações Web e aplicações Backend. Sou uma pessoa
              focada, pró ativa e sempre aberto a novas oportunidades e aprender
              coisas novas. Ah e não menos importante tenho um canal no Youtube
              de motovlog!
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
                <a href="mailto:severo.e.carlos@gmail.com?subject=Olá Carlos&body=Escreva sua mensagem aqui ou abaixo">
                  severo.e.carlos@gmail.com
                </a>
              </span>
              <span className="link">
                <b>Whatsapp: </b>
                <a href="https://api.whatsapp.com/send?phone=5515996605712&text=Ol%C3%A1%20Carlos%2C%20vim%20pelo%20seu%20site!">
                  (15)99660-5712
                </a>
              </span>
              <span className="link">
                <b>Trabalho: </b>
                Desenvolvedor na{' '}
                <a href="https://slideworks.cc/pt-BR/">
                  <b> Slide Works</b>
                </a>
              </span>
              <span className="link">
                <b>Youtube: </b>
                <a href="https://www.youtube.com/channel/UCFcuIk6AjU_eiLZaTjJA8kA">
                  Carlos Severo
                </a>
              </span>
            </motion.div>
          </div>
        </section>
      </Container>
    </>
  )
}

export default About
