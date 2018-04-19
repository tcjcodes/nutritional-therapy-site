import { Container, Section } from 'bloomer';
import React from 'react';
import Helmet from 'react-helmet';
import BreadcrumbLink from '../components/breadcrumb-link';
import PageHeader from '../components/page-header';
import ProductCard from '../components/product-card';
import ProductCardColumn from '../components/product-card-column';
import ProductCardRow from '../components/product-card-row';

const CategoriesTemplate = ({ data }) => {
  const { categoryKey } = data.markdownRemark.fields;
  const { name, description } = data.markdownRemark.frontmatter;
  const matchingProducts = data.products.edges
    .map(edge => edge.node)
    .filter(node => node.fields.categoryKey === categoryKey);
  const { title } = data.site.siteMetadata;
  return (
    <Section className='section'>
      <Helmet title={`${name} Products | ${title}`}/>

      <Container isFluid={true} style={{ padding: '0 1em' }}>
        <p css={{ textAlign: 'center' }}>
          <BreadcrumbLink to='/products/' text='All Recommended Products'/>
        </p>
        <PageHeader center title={`${name} Products`}/>
        <p css={{ textAlign: 'center' }}>{description}</p>

        <ProductCardRow>
          {matchingProducts.map(node => (
            <ProductCardColumn isSize={{ desktop: 3, tablet: 4, mobile: 1 }} key={node.id}>
              <ProductCard
                slug={node.fields.slug}
                thumbnail={node.frontmatter.image}
                title={node.frontmatter.title}
                excerpt={node.excerpt}
              />
            </ProductCardColumn>
          ))}
        </ProductCardRow>
      </Container>
    </Section>
  );
};

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
`;

export default CategoriesTemplate;
