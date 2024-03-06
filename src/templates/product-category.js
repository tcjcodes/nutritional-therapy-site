import { Container, Section } from 'react-bulma-components';
import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import BreadcrumbLink from '../components/shared/breadcrumb-link';
import Layout from '../components/layout';
import PageHeader from '../components/page-header';
import ProductCardColumn from '../components/products/product-card-column';
import ProductCardRow from '../components/products/product-card-row';
import ProductCategoryHeading
  from '../components/products/product-category-heading';

const CategoriesTemplate = ({ data }) => {
  const { categoryKey } = data.markdownRemark.fields;
  const { name, description } = data.markdownRemark.frontmatter;
  const matchingProducts = data.products.edges
  .map((edge) => edge.node)
  .filter((node) => node.fields.categoryKey === categoryKey);
  const pageTitle = `Favorite ${name}`;

  const { title } = data.site.siteMetadata;
  return (
    <Layout>
      <Section className='section'>
        <Helmet title={`${pageTitle} | ${title}`} />

        <Container isFluid={true} style={{ padding: '0 1em' }}>
          <PageHeader center title={pageTitle} />
          <p
            data-testid='fav-category-description'
            css={{ textAlign: 'center' }}
          >
            {description}
          </p>

          <div css={{ marginBottom: '3rem' }}>
            <ProductCategoryHeading>
              <BreadcrumbLink to='/products/' text={`other favorites`} />
            </ProductCategoryHeading>
            <ProductCardRow>
              {matchingProducts.map((node) => (
                <ProductCardColumn
                  key={node.id}
                  slug={node.fields.slug}
                  thumbnail={node.frontmatter.image}
                  title={node.frontmatter.title}
                  excerpt={node.excerpt}
                />
              ))}
            </ProductCardRow>
          </div>
        </Container>
      </Section>
    </Layout>
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
