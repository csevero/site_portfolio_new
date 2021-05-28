import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { HeaderWrapper, HeaderLinks } from './style'

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderLinks href="/">Inicio</HeaderLinks>
      <HeaderLinks href="/about">Sobre</HeaderLinks>
      <HeaderLinks href="#">Projetos</HeaderLinks>
      <HeaderLinks href="#">Contato</HeaderLinks>
    </HeaderWrapper>
  )
}
