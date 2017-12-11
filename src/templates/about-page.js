import React from 'react'
import { Column, Columns, Container, Content, Section } from 'bloomer'
import PageHeader from '../components/page-header'
import Img from 'gatsby-image'

export default ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Section>
      <Container>
        <Columns isVCentered={true}>
          <Column isSize={4} isOffset={1} style={{ marginRight: '2.5em', }}>
            <Img
              sizes={data.file.childImageSharp.sizes}
              alt="Caroline"
              title="About Caroline"
            />
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
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
