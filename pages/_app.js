import App, { Container } from 'next/app'
import React from 'react'
import { AppShell } from '../components'

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <AppShell>
          <Component {...pageProps} />
        </AppShell>
      </Container>
    )
  }
}
