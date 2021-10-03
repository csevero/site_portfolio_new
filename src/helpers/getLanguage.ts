import { useRouter } from 'next/dist/client/router'
import locales from '../locales'

export function getLanguage() {
  const { locale } = useRouter()

  if (locale === 'pt-BR') {
    return locales.pt_BR
  } else if (locale === 'en') {
    return locales.en
  }

  return locales.pt_BR
}
