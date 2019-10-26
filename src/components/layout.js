import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../layouts/theme.scss'
import bgImg from '../img/noisy/noisy.png'
import favicon from '../img/favicon.png'
import Navigation from '../components/navigation'
import PageFooter from '../components/page-footer'

const Layout = ({ children, data }) => {
  const { title } = data.site.siteMetadata
  const edges = data.allMarkdownRemark.edges.map(edge => edge.node)
  return (
    <div
      style={{
        minHeight: '100vh',
        background: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.8)), url(${bgImg}) top repeat`,
      }}
    >
      <Helmet>
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
        <title>{title}</title>
      </Helmet>
      <Navigation categoryNodes={edges} title={title} />
      <div>{children}</div>
      <PageFooter title={title} />
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.func,
}

export const pageQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {
        fields: { categoryKey: { ne: null } }
        frontmatter: { templateKey: { eq: "product-category" } }
      }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            name
          }
          fields {
            categoryKey
          }
        }
      }
    }
  }
`

export default Layout
