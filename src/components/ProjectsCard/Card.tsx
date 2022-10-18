import React from 'react'
import { getLanguage } from '../../helpers/getLanguage'
import { Button, CardContainer } from './style'

interface ICardProps {
  title: string
  subject: string
  accessSite?: string
  accessOnGithub?: string
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
  const translate = getLanguage()
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
            {translate.projectsPage.access}
          </Button>
        )}
        {accessOnGithub && (
          <Button
            rel="noreferrer noopener"
            target="_blank"
            href={accessOnGithub}
          >
            {translate.projectsPage.seeOnGithub}
          </Button>
        )}
      </div>
    </CardContainer>
  )
}
