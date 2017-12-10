import React from 'react'
import {
  Column,
  Columns,
  Container,
  Content,
  Image,
  Section,
  Title,
} from 'bloomer'
import avatar from '../img/cdlr0.jpg'
import { secondaryFont, serifFont } from '../utils/fonts'
import PageHeader from '../components/page-header'

export default ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Section>
      <Container>
        <Columns isVCentered={true}>
          <Column isSize={6} isOffset={1} style={{ paddingRight: '1em' }}>
            <PageHeader title={post.frontmatter.title} />
            <Content dangerouslySetInnerHTML={{ __html: post.html }} />
          </Column>
          <Column isSize={4}>
            <Image isRatio="square" src={avatar} />
          </Column>
        </Columns>
      </Container>
    </Section>
  )
}

export const aboutPageQuery = graphql`
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
  }
`
