import React from 'react'
import Helmet from 'react-helmet'
import { Box, Button, Container, Content, Image, Section, Title } from 'bloomer'
import Link, { withPrefix } from 'gatsby-link'
import { secondaryFont, serifFont } from '../utils/fonts'
import { colorGreenDark } from '../utils/theme-variables'
import StyledIcon from '../components/styled-icon'

export default function ProductTemplate({ data }) {
  const siteTitle = data.site.siteMetadata.title

  const { markdownRemark: post } = data
  const { image, link, title } = post.frontmatter
  let hyperlink = link.indexOf('http') >= 0 ? link : `http://${link}`

  return (
    <Section className="section">
      <Helmet title={`Product | ${siteTitle}`} />
      <Container isClearfix={true}>
        <div>
          <div style={{ float: 'left', margin: '0 1.5rem 1rem 0' }}>
            <Box style={{ maxWidth: '450px', maxHeight: '700px' }}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  border: '1px solid gainsboro',
                }}
                src={__PATH_PREFIX__ + image}
                alt={post.frontmatter.title}
              />
            </Box>
          </div>
          <Link
            style={{
              ...serifFont,
              fontSize: '1.2rem',
              color: colorGreenDark,
            }}
            to={`/product-categories/${post.fields.categoryKey}`}
          >
            <StyledIcon styles={{ marginBottom: `1.5rem` }} name="angle-left" />
            {` `}
            Go Back
          </Link>

          <Title
            style={{ ...secondaryFont, marginBottom: '0.75rem' }}
            isSize={2}
            hasTextColor="dark"
          >
            {post.frontmatter.title}
          </Title>
          <div>
            <span css={{ marginRight: '1em' }}>Share On:</span>
            <Link style={{ paddingRight: '0.5em' }} to="">
              <StyledIcon
                name="facebook-official"
                style={{ fontSize: '1.25em' }}
              />
            </Link>
            <Link style={{ padding: '0.5em' }} to="">
              <span name="pinterest" style={{ fontSize: '1.25em' }} />
            </Link>
          </div>
          <Button
            style={{ margin: '1em 0' }}
            isColor="primary"
            href={hyperlink}
            target="_blank"
          >
            <StyledIcon name="shopping-cart" />Buy Item
          </Button>
          <Content dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Container>
    </Section>
  )
}

export const pageQuery = graphql`
  query ProductByPath($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
        categoryKey
      }
      frontmatter {
        title
        link
        image
      }
    }
  }
`
