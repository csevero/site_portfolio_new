import { MotionProps } from 'framer-motion'
import React from 'react'
import theme from '../../styles/theme'
import { CardContainer, Button } from './style'

interface ICardProps {
  title: string
  subject: string
  accessSite?: string
  accessOnGithub: string
  delay?: number
}

export const Card: React.FC<ICardProps> = ({
  children,
  accessOnGithub,
  subject,
  title,
  accessSite,
  delay
}) => {
  //BUSCAR UMA FORME DE PASSAR UMA LISTA DINÂMICA DENTRO DO COMPONENTE
  return (
    <CardContainer
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5, delay: delay }}
    >
      <h1>{title}</h1>
      <p>{subject}</p>
      <div className="icons">{children}</div>
      <div className="buttons">
        {accessSite && (
          <Button
            rel="noreferrer noopener"
            target="_blank"
            backgroundColor={theme.colors.blue_1}
            href={accessSite}
          >
            Acessar
          </Button>
        )}
        <Button rel="noreferrer noopener" target="_blank" href={accessOnGithub}>
          Ver no Github
        </Button>
      </div>
    </CardContainer>
  )
}
