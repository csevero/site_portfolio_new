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

/*
documento foi copiado do site https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/pages/_document.js. Onde é um exemplo do próprio styled components, para que nosso site, seja renderizado já com as estilizações aplicadas, pois por padrão o next carregaria o site e depois aplicaria os styles, com essas configurações ele já aplica durante a renderização.
Foi adicionado tipos
*/
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

  //o conteúdo abaixo adicionamos para definirmos conteúdos para todas as páginas da aplicação, por exemplo, fontes, ou outras coisas necessárias, aqui não aceita title, ou coisas dessa forma, pois aqui é um arquivo de configuração global
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins&family=Rubik:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link ref="icon" rel="favicon.ico" />
          <meta name="language" content="pt-BR" />
          <meta
            name="description"
            content="Esse é o site da minha biografia onde falo um pouco mais sobre minha pessoa, exponho alguns de meus projetos. Fiz o site pensando em aprimorar meu conhecimento e também me apresentar a todos da World Wide Web!"
          />
          <meta name="robots" content="all" />
          <meta name="author" content="Carlos Eduardo Severo" />
            
          <meta
            name="keywords"
            content="portfolio, programação, projetos, reactjs, nodejs, nextjs"
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
          {/* dentro do main é onde será renderizado o conteúdo da nossa página */}
          <Main />
          {/* aqui é onde será aplicativo os scripts que dão vida a nossa aplicação */}
          <NextScript />
        </body>
      </Html>
    )
  }
}
