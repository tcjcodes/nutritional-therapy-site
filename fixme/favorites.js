import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { Box, Column, Columns, Container, Heading, Section } from 'bloomer'
import Dotdotdot from 'react-dotdotdot'
import { serifFont } from '../utils/fonts'
import {
  colorBrown,
  colorBrownDark,
  colorGreenDark,
} from '../utils/theme-variables'
import PageHeader from '../components/page-header'

const cardWrapperStyles = {
  position: 'relative',
  width: '100%',
  color: colorBrown,
}
const cardImageStyles = thumbnail => ({
  height: '300px',
  overflowY: 'hidden',
  background: `url(${thumbnail}) center no-repeat`,
  backgroundSize: 'cover',
})
const cardOverlayStyles = {
  padding: '1.5em',
  overflowY: 'hidden',
  position: 'absolute',
  top: '70%',
  height: '30%',
  left: '0',
  width: '100%',
  background: 'rgba(255,255,255,0.9)',
  hasTextAlign: 'center',
  transition: 'top 0.3s, height 0.3s',
  '&:hover': {
    height: '100%',
    top: '0',
  },
}
const headingStyles = {
  ...serifFont,
  lineHeight: '120%',
  color: colorGreenDark,
  marginBottom: 0,
  fontSize: '1.75rem',
}
const titleBorderStyles = {
  margin: `1rem 0`,
  borderBottom: `1px solid rgb(79, 109, 26)`,
  width: `1.75rem`,
  padding: 0,
}
const excerptStyles = {
  fontSize: `1.2rem`,
  textTransform: 'none',
  color: colorBrownDark,
}

const FavoriteCard = ({ slug, thumbnail, title, excerpt }) => (
  <Link to={slug}>
    <div css={cardWrapperStyles}>
      <Box>
        <div css={cardImageStyles(thumbnail)} />
        <div css={cardOverlayStyles}>
          <Heading style={headingStyles}>
            <Dotdotdot clamp={4}>{title}</Dotdotdot>
          </Heading>
          <div css={titleBorderStyles} />
          <p css={excerptStyles}>
            <Dotdotdot clamp={5}>{excerpt}</Dotdotdot>
          </p>
        </div>
      </Box>
    </div>
  </Link>
)

const FavoritesTemplate = ({ data }) => {
  const edges = data.allMarkdownRemark.edges
  const { title } = data.site.siteMetadata
  return (
    <Section className="section">
      <Helmet title={`${title} | Favorites`} />

      <Container isFluid={true} style={{ padding: '0 1em' }}>
        <PageHeader center title="Personal Favorites" />
        <Columns
          style={{ marginTop: '0.5rem' }}
          isMultiline={true}
          isCentered={true}
          isGrid={true}
        >
          {edges.map(({ node }) => (
            <Column
              isSize={{
                mobile: 1,
                tablet: '1/3',
                desktop: '1/4',
                widescreen: 3,
              }}
              key={node.id}
            >
              <FavoriteCard
                slug={node.fields.slug}
                thumbnail={node.frontmatter.images[0].image}
                title={node.frontmatter.title}
                excerpt={node.excerpt}
              />
            </Column>
          ))}
        </Columns>
      </Container>
    </Section>
  )
}

export const pageQuery = graphql`
  query FavoritePageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "favorite-item" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 70)
          frontmatter {
            title
            link
            image
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default FavoritesTemplate
