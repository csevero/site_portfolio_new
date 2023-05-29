import React from 'react'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    const setInitialTheme = `
      function getUserPreference() {
        const theme = window.localStorage.getItem('theme')
        if(theme) {
          return theme
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      }
      document.body.dataset.theme = getUserPreference()
    `
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins&family=Rubik:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link ref="icon" rel="favicon-site.png" />
          <meta name="language" content="pt-BR" />
          <meta
            name="description"
            content="Esse é o site da minha biografia onde falo um pouco mais sobre minha pessoa, exponho alguns de meus projetos. Fiz o site pensando em aprimorar meu conhecimento e também me apresentar a todos da World Wide Web!"
          />
          <meta name="robots" content="all" />
          <meta name="author" content="Carlos Eduardo Severo" />
            
          <meta
            name="keywords"
            content="portfolio, programação, projetos, reactjs, nodejs, nextjs, twilio"
          />
          <meta property="og:type" content="page" />
          <meta property="og:url" content="https://carlossevero.com.br" />
          <meta property="og:title" content="Meu portfólio - Carlos Severo" />
            
          <meta
            property="og:description"
            content="Esse é o site da minha biografia onde falo um pouco mais sobre minha pessoa, exponho alguns de meus projetos. Fiz o site pensando em aprimorar meu conhecimento e também me apresentar a todos da World Wide Web!"
          />
          <meta property="article:author" content="Carlos Eduardo Severo" />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
