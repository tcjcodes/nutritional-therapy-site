import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { Column, Columns, Container, Heading, Section } from 'bloomer'
import { serifFont } from '../utils/fonts'
import { colorBrown, colorBrownDark } from '../utils/theme-variables'
import PageHeader from '../components/page-header'
import ProductCard from '../components/product-card'

const CUTOFF_LENGTH = 4
const sortProducts = edges => {
  let categorized = {}
  edges.map(edge => edge.node).forEach(node => {
    const { id, frontmatter, fields, excerpt } = node
    const { categoryKey, slug } = fields
    if (!categorized[categoryKey]) {
      categorized[categoryKey] = []
    }

    const { title, image } = frontmatter
    if (categorized[categoryKey].length < CUTOFF_LENGTH) {
      categorized[categoryKey].push({
        id,
        slug,
        excerpt,
        title,
        image,
      })
    }
  })
  return categorized
}

const ProductsTemplate = ({ data }) => {
  const edges = data.allMarkdownRemark.edges
  const categories = sortProducts(edges)
  const { title } = data.site.siteMetadata
  return (
    <Section className="section">
      <Helmet title={`Products | ${title}`} />

      <Container isFluid={true} style={{ padding: '0 1em' }}>
        <PageHeader center title="Recommended Products" />

        <div css={{}}>
          {Object.keys(categories).map(key => (
            <div key={key} style={{ marginBottom: '3rem' }}>
              <Heading
                hasTextAlign="centered"
                style={{
                  ...serifFont,
                  lineHeight: '120%',
                  color: colorBrown,
                  margin: '1rem 0 0 0',
                  fontSize: '1.75rem',
                }}
              >
                <Link to={`/product-categories/${key}/`}>{key}</Link>
              </Heading>
              <Columns
                isMultiline={true}
                isCentered={true}
                style={{ marginTop: '0.5rem' }}
              >
                {categories[key].map(c => (
                  <Column
                    key={c.id}
                    isSize={{ desktop: 3, tablet: 4, mobile: 1 }}
                  >
                    <ProductCard
                      slug={c.slug}
                      thumbnail={c.image}
                      title={c.title}
                      excerpt={c.excerpt}
                    />
                  </Column>
                ))}
              </Columns>
              {categories[key].length === CUTOFF_LENGTH && (
                <div css={{ textAlign: 'center' }}>
                  <Link
                    css={{ ...serifFont, colorBrownDark }}
                    to={`/product-categories/${key}`}
                  >
                    See More...
                  </Link>
                </div>
              )}
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
            categoryKey
          }
        }
      }
    }
  }
`

export default ProductsTemplate
