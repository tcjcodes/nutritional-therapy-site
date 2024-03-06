import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import '../styles/theme.scss';
import bgImg from '../img/noisy/noisy.png';
import favicon from '../img/favicon.png';
import Navigation from './nav/navigation';
import PageFooter from '../components/page-footer';
import { SEO } from './shared/SEO';

const pageQuery = graphql`
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
    file(relativePath: { eq: "rwp_seal.png" }) {
      childImageSharp {
        gatsbyImageData(width: 128, layout: FIXED)
      }
    }
  }
`;

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={pageQuery}
      render={(data) => {
        const { title } = data.site.siteMetadata;
        const edges = data.allMarkdownRemark.edges.map((edge) => edge.node);
        const logoImg = data.file.childImageSharp.gatsbyImageData;

        return (
          <div
            style={{
              minHeight: '100vh',
              background: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.8)), url(${bgImg}) top repeat`,
            }}
          >
            <Helmet>
              <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
              <SEO />
            </Helmet>
            <Navigation categoryNodes={edges} title={title} />
            <div>{children}</div>
            <PageFooter title={title} logoImg={logoImg} />
          </div>
        );
      }}
    />
  );
};
Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
