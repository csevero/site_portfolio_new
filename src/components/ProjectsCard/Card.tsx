import React from 'react'
import theme from '../../styles/theme'
import { CardContainer, Button } from './style'

interface ICardProps {
  title: string
  subject: string
  accessSite?: string
  accessOnGithub: string
}

export const Card: React.FC<ICardProps> = ({
  children,
  accessOnGithub,
  subject,
  title,
  accessSite
}) => {
  //BUSCAR UMA FORME DE PASSAR UMA LISTA DINÂMICA DENTRO DO COMPONENTE
  return (
    <CardContainer>
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
