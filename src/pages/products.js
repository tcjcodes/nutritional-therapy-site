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
  padding: '1em',
  overflowY: 'hidden',
  position: 'absolute',
  top: '70%',
  height: '30%',
  left: '0',
  width: '100%',
  background: 'rgba(245,245,245,0.85)',
  hasTextAlign: 'center',
  transition: 'all 0.3s',
  '&:hover': {
    height: '100%',
    top: '0',
    background: 'rgba(245,245,245,0.95)',
  },
}
const headingStyles = {
  ...serifFont,
  lineHeight: '120%',
  color: colorGreenDark,
  marginBottom: 0,
  fontSize: '1.25rem',
}
const titleBorderStyles = {
  margin: `1rem 0`,
  borderBottom: `1px solid rgb(79, 109, 26)`,
  width: `1.75rem`,
  padding: 0,
}
const excerptStyles = {
  fontSize: `1rem`,
  textTransform: 'none',
  color: colorBrownDark,
}

const ProductCard = ({ slug, thumbnail, title, excerpt }) => (
  <Link to={slug}>
    <div css={cardWrapperStyles}>
      <Box style={{ padding: '0.5em' }}>
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

const sortProducts = edges => {
  let categorized = {}
  edges.map(edge => edge.node).forEach(node => {
    const { id, frontmatter, fields, excerpt } = node
    if (!categorized[frontmatter.category]) {
      categorized[frontmatter.category] = []
    }

    const { title, image } = frontmatter
    const { slug } = fields
    categorized[frontmatter.category].push({
      id,
      slug,
      excerpt,
      title,
      image,
    })
  })
  return categorized
}

const ProductsTemplate = ({ data }) => {
  const edges = data.allMarkdownRemark.edges
  const categories = sortProducts(edges)
  const { title } = data.site.siteMetadata
  return (
    <Section className="section">
      <Helmet title={`${title} | Products`} />

      <Container isFluid={true} style={{ padding: '0 1em' }}>
        <PageHeader center title="Recommended Products" />

        <div css={{ }}>
          {Object.keys(categories).map(key => (
            <div style={{ marginBottom: '2rem', }}>
              <Heading
                isSize={3}
                style={{
                  ...serifFont,
                  lineHeight: '120%',
                  color: colorBrown,
                  marginBottom: 0,
                  fontSize: '1.75rem',
                }}
              >
                <Link to={`/product-categories/${key.toLowerCase()}/`}>{key}</Link>
              </Heading>
              <Columns style={{ marginTop: '0.5rem' }}>
                {categories[key].map(c => (
                  <Column key={c.id} isSize={{ desktop: '1/4' }}>
                    <ProductCard
                      slug={c.slug}
                      thumbnail={c.image}
                      title={c.title}
                      excerpt={c.excerpt}
                    />
                  </Column>
                ))}
              </Columns>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export const pageQuery = graphql`
  query ProductPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "product" } } }
      sort: {
        fields: [frontmatter___category, frontmatter___title]
        order: ASC
      }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
          frontmatter {
            templateKey
            title
            category
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

export default ProductsTemplate
