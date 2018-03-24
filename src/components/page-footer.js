import React from 'react'
import { Container, Footer } from 'bloomer'

const PageFooter = ({ data, title }) => (
  <Footer style={{ background: 'transparent', padding: '5em 3em 3em 3em' }}>
    <Container hasTextAlign="centered">
      &copy; Copyright {title}{' '}
      {new Date().getFullYear()}.
    </Container>
  </Footer>
)

export default PageFooter