import React from 'react'
import Helmet from 'react-helmet'
import { Box, Button, Column, Columns, Container, Content, Image, Section, Title, } from 'bloomer'
import Link, { withPrefix } from 'gatsby-link'
import { secondaryFont, serifFont } from '../utils/fonts'
import { colorGreenDark } from '../utils/theme-variables'

const settings = {
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: false,
}
export default function FavoriteItemTemplate({ data }) {
  const { markdownRemark: post } = data
  const { images } = post.frontmatter
  return (
    <Section className="section">
      <Helmet title={`Favorites | ${post.frontmatter.title}`} />
      <Container>
        <Columns>
          <Column isSize={5} isOffset={1} style={{}}>
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
              href={post.frontmatter.link}
              target="_blank"
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
          <Column isSize={5} style={{ padding: '0' }}>
            {/*<Slider
              dots={images.length > 1}
              arrows={images.length > 1}
              infinite={false}
              {...settings}
            >
            </Slider>*/}
            {images.map((t, index) => (
              <div style={{ width: 'auto' }} key={t.image}>
                <Box style={{ maxWidth: '450px', maxHeight: '700px' }}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      border: '1px solid gainsboro',
                    }}
                    src={__PATH_PREFIX__ + t.image}
                    alt={post.frontmatter.title + ' ' + (index + 1)}
                  />
                </Box>
              </div>
            ))}
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
        link
        images {
          image
        }
      }
    }
  }
`
