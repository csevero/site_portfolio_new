import React from 'react'
import ActiveLink from './Link'
import { HeaderWrapper } from './style'

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <ActiveLink href="/">Inicio</ActiveLink>
      <ActiveLink href="/about">Sobre</ActiveLink>
      <ActiveLink href="/projects">Projetos</ActiveLink>
      <ActiveLink href="/contact">Contato</ActiveLink>
    </HeaderWrapper>
  )
}
