import { Box, Flex, GlobalStyle } from '../'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../lib/theme'
import { Header } from './Header'

export function AppShell({ children }) {
  return (
    <>
      <Head>
        <title>platecalc</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <Flex height="100vh" flexDirection="column">
          <Header />
          {children}
        </Flex>
      </ThemeProvider>
    </>
  )
}
