import React from 'react'
import Helmet from 'react-helmet'
import { Box, Button, Container, Content, Image, Section, Title } from 'bloomer'
import Link, { withPrefix } from 'gatsby-link'
import { secondaryFont, serifFont } from '../utils/fonts'
import { colorGreenDark } from '../utils/theme-variables'
import StyledIcon from '../components/styled-icon'

export default function FavoriteItemTemplate({ data }) {
  const { markdownRemark: post } = data
  const { images, link } = post.frontmatter
  let hyperlink = link.indexOf('http') >= 0 ? link : `http://${link}`

  return (
    <Section className="section">
      <Helmet title={`Favorites | ${post.frontmatter.title}`} />
      <Container isClearfix={true}>
        <div>
          {images.map((t, index) => (
            <div
              style={{ float: 'right', margin: '0 0 1rem 1.5rem' }}
              key={t.image}
            >
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

          <Link
            style={{
              ...serifFont,
              fontSize: '1.2rem',
              color: colorGreenDark,
            }}
            to="/favorites/"
          >
            <StyledIcon styles={{ marginBottom: `1.5rem` }} name="angle-left" />
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
          <Button
            style={{ margin: '1em 0' }}
            isColor="primary"
            href={hyperlink}
            target="_blank"
          >
            <StyledIcon name="shopping-cart" />Buy Item
          </Button>
          <Content dangerouslySetInnerHTML={{ __html: post.html }} />
          <div>
            <p>
              <small>Share On:</small>
            </p>
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
        </div>
      </Container>
    </Section>
  )
}

// export const pageQuery = graphql`
//   query FavoriteItemByPath($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       fields {
//         slug
//       }
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         title
//         image
//       }
//     }
//   }
// `
