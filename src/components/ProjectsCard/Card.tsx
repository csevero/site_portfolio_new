import React from 'react'
import { Button, CardContainer } from './style'

interface ICardProps {
  title: string
  subject: string
  accessSite?: string
  accessOnGithub: string
  delay?: number
  icons: string[]
}

export const Card: React.FC<ICardProps> = ({
  accessOnGithub,
  subject,
  title,
  accessSite,
  icons
}) => {
  return (
    <CardContainer>
      <h1>{title}</h1>
      <p>{subject}</p>
      <div className="icons">
        {icons.map((Icon, i) => {
          return <Icon key={i} />
        })}
      </div>
      <div className="buttons">
        {accessSite && (
          <Button
            rel="noreferrer noopener"
            target="_blank"
            colorGreen
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
