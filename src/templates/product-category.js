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
import ProductCard from '../components/product-card'

const CategoriesTemplate = ({ data }) => {
  const { categoryKey } = data.markdownRemark.fields
  const { name, description } = data.markdownRemark.frontmatter
  const matchingProducts = data.products.edges
    .map(edge => edge.node)
    .filter(node => node.fields.categoryKey === categoryKey)
  const { title } = data.site.siteMetadata
  return (
    <Section className="section">
      <Helmet title={`${name} Products | ${title}`} />

      <Container isFluid={true} style={{ padding: '0 1em' }}>
        <PageHeader center title={`${name} Products`} />
        <p css={{ textAlign: 'center', }}>{description}</p>
        <Columns
          style={{ marginTop: '0.5rem' }}
          isMultiline={true}
          isCentered={true}
          isGrid={true}
        >
          {matchingProducts.map(node => (
            <Column isSize={{ desktop: 3, tablet: 4, mobile: 1 }} key={node.id}>
              <ProductCard
                slug={node.fields.slug}
                thumbnail={node.frontmatter.image}
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
  query ProductCategoriesPageQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        name
        description
      }
      fields {
        categoryKey
      }
    }
    products: allMarkdownRemark(
      filter: {
        fields: { categoryKey: { ne: null } }
        frontmatter: { templateKey: { eq: "product" } }
      }
      sort: { fields: [frontmatter___title], order: ASC }
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

export default CategoriesTemplate
