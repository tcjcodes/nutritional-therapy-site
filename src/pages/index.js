import React from 'react'
import Script from 'react-load-script'
import Hero from '../components/hero'
import { Column, Columns, Container, Content, Section } from 'bloomer'
import Img from 'gatsby-image'

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
    window.netlifyIdentity.init()
  }

  render() {
    const { data } = this.props
    const heroSizes = data.file.childImageSharp.sizes
    return (
      <div>
        <Hero>
          <Img sizes={heroSizes} alt="Herbs, turmeric, chopping board" />
        </Hero>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />
      </div>
    )
  }
}

export const query = graphql`
  query IndexQuery {
    file(relativePath: { eq: "image0.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 2400) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
