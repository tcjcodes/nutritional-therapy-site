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

const ProductCard = ({ slug, thumbnail, title, excerpt }) => (
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

        <Columns
          style={{ marginTop: '0.5rem' }}
          isMultiline={true}
          isCentered={true}
          isGrid={true}
        >
          {Object.keys(categories).map(key => (
            <div>
              <h2 className="subtitle">{key}</h2>
              {categories[key].map(c => (
                <p css={{ marginBottom: '1rem', }} key={c.id}>
                  {JSON.stringify(c)}
                  {/*<ProductCard
                slug={node.fields.slug}
                thumbnail={node.frontmatter.image}
                title={node.frontmatter.title}
                excerpt={node.excerpt}
              />*/}
                </p>
              ))}
            </div>
          ))}
        </Columns>
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
