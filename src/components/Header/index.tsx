import React from 'react'
import { getLanguage } from '../../helpers/getLanguage'
import ActiveLink from './Link'
import { HeaderWrapper } from './style'

export const Header: React.FC = () => {
  const translate = getLanguage()
  return (
    <HeaderWrapper>
      <ActiveLink href="/">{translate.navbar.home}</ActiveLink>
      <ActiveLink href="/about">{translate.navbar.about}</ActiveLink>
      <ActiveLink href="/projects">{translate.navbar.projects}</ActiveLink>
      <ActiveLink href="/contact">{translate.navbar.contact}</ActiveLink>
    </HeaderWrapper>
  )
}
