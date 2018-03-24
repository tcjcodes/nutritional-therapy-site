import React from 'react'
import Helmet from 'react-helmet'
import { Box, Column, Columns, Container, Content, Section } from 'bloomer'
import PageHeader from '../components/page-header'
import Img from 'gatsby-image'

export default ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const { markdownRemark: post } = data
  return (
    <Section>
      <Helmet title={`About | ${siteTitle}`} />
      <Container>
        <Columns isVCentered={true}>
          <Column isSize={4} isOffset={1} style={{ marginRight: '2em' }}>
            <Box>
              <Img
                sizes={data.file.childImageSharp.sizes}
                alt="Caroline"
                title="About Caroline"
              />
            </Box>
          </Column>
          <Column isSize={6} style={{ paddingRight: '1em' }}>
            <PageHeader center title={post.frontmatter.title} />
            <Content dangerouslySetInnerHTML={{ __html: post.html }} />
          </Column>
        </Columns>
      </Container>
    </Section>
  )
}

export const query = graphql`
  query AboutPage($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    file(relativePath: { eq: "cdlr0.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 450) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
