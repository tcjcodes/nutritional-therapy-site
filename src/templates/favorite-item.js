import React from 'react'
import Helmet from 'react-helmet'
import { Box, Button, Column, Columns, Container, Content, Image, Section, Title, } from 'bloomer'
import Link, { withPrefix } from 'gatsby-link'
import { secondaryFont, serifFont } from '../utils/fonts'
import { colorGreenDark } from '../utils/theme-variables'

export default function FavoriteItemTemplate({ data }) {
  const { markdownRemark: post } = data
  return (
    <Section className="section">
      <Helmet title={`Favorites | ${post.frontmatter.title}`} />
      <Container>
        <Columns isVCentered={true} isCentered={true}>
          <Column isSize={5} style={{ padding: '0' }}>
            {post.frontmatter.images.map((t, index) => (
              <div style={{ maxHeight: '80vh', width: 'auto' }} key={t.image}>
                <Box style={{ maxWidth: '400px', float: 'right' }}>
                  <Image
                    style={{ width: '100%', height: 'auto' }}
                    src={__PATH_PREFIX__ + t.image}
                    alt={post.frontmatter.title + ' ' + (index + 1)}
                  />
                </Box>
              </div>
            ))}
          </Column>
          <Column isSize={6} style={{ padding: '0 3em' }}>
            <Link
              style={{
                ...serifFont,
                fontSize: '1.2rem',
                color: colorGreenDark,
              }}
              to="/favorites/"
            >
              <span
                style={{ marginBottom: `1.5rem` }}
                className="fa fa-angle-left"
              />
              {` `}
              Back to Favorites
            </Link>

            <Title
              style={{ ...secondaryFont, marginBottom: '0.75rem' }}
              isSize={2}
              hasTextColor="dark"
            >
              {post.frontmatter.title}
            </Title>
            <Content dangerouslySetInnerHTML={{ __html: post.html }} />
            <Button
              style={{ marginBottom: '1.5em' }}
              isColor="primary"
              href={post.link}
            >
              <span
                css={{ marginRight: '0.5em' }}
                className="fa fa-shopping-cart"
              />Buy Item
            </Button>
            <div>
              <p>
                <small>Share On:</small>
              </p>
              <Link style={{ paddingRight: '0.5em' }} to="">
                <span
                  className="fa fa-facebook-official"
                  style={{ fontSize: '1.25em' }}
                />
              </Link>
              <Link style={{ padding: '0.5em' }} to="">
                <span
                  className="fa fa-pinterest"
                  style={{ fontSize: '1.25em' }}
                />
              </Link>
            </div>
          </Column>
        </Columns>
      </Container>
    </Section>
  )
}

export const pageQuery = graphql`
  query FavoriteItemByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        images {
          image
        }
      }
    }
  }
`
