import React from 'react'
import Script from 'react-load-script'
import Hero from '../components/hero'
import { Column, Columns, Container, Content, Section } from 'bloomer'
import bgImg from '../img/ricepaper_@2X.png'

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
    const { edges: posts } = data.allMarkdownRemark
    return (
      <div>
        <Hero />
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <Section>
          <Container>
            <Columns>
              <Column isSize="1/2" isOffset="1/4">
                <Content>
                  <p css={{ margin: '1em 0' }}>
                    Welcome message. Brisket tenderloin porchetta shankle pork
                    belly strip steak, frankfurter chuck jowl corned beef spare
                    ribs sausage capicola ball tip. Fatback turkey cow
                    burgdoggen capicola, pork belly sausage tenderloin pastrami
                    shankle pork chop short loin buffalo. Swine spare ribs short
                    loin shank, pancetta pork chop biltong meatball sirloin
                    filet mignon pork loin alcatra kielbasa. Flank capicola
                    chuck, alcatra pork chop bacon hamburger andouille rump ham
                    sirloin pork belly. Short loin beef kevin doner pork loin,
                    chicken venison pork belly flank salami bacon ham.
                  </p>
                </Content>
              </Column>
            </Columns>
          </Container>
        </Section>
        {/*<BlogTemplate posts={posts} />*/}
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
