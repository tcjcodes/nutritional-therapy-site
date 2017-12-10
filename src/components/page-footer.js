import React from 'react'
import { Container, Footer } from 'bloomer'

const PageFooter = () => (
  <Footer style={{ background: 'transparent', padding: '5em 3em 3em 3em' }}>
    <Container hasTextAlign="centered">
      &copy; Copyright CDLR {new Date().getFullYear()}.
    </Container>
  </Footer>
)

export default PageFooter
