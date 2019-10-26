import { Container, Section, Heading, Columns, Column } from "bloomer";
import Link from "gatsby-link";
import React from "react";
import Helmet from "react-helmet";
import BreadcrumbLink from "../components/breadcrumb-link";
import PageHeader from "../components/page-header";
import ProductCard from "../components/product-card";
import ProductCardColumn from "../components/product-card-column";
import ProductCardRow from "../components/product-card-row";
import ProductCategoryHeading from "../components/product-category-heading";
import { serifFont } from "../utils/fonts";
import { colorBrown } from "../utils/theme-variables";
const pageTitle = "Products";
const CategoriesTemplate = ({ data }) => {
  const { categoryKey } = data.markdownRemark.fields;
  const { name, description } = data.markdownRemark.frontmatter;
  const matchingProducts = data.products.edges
    .map(edge => edge.node)
    .filter(node => node.fields.categoryKey === categoryKey);

  const { title } = data.site.siteMetadata;
  return (
    <Section className="section">
      <Helmet title={`${name} ${pageTitle} | ${title}`} />

      <Container isFluid={true} style={{ padding: "0 1em" }}>
        <PageHeader center title={`${name} ${pageTitle}`} />
        <p css={{ textAlign: 'center' }}>{description}</p>

        <div css={{ marginBottom: "3rem" }}>
          <ProductCategoryHeading>
            <BreadcrumbLink to="/products/" text={`Back to all ${pageTitle}`} />
          </ProductCategoryHeading>
          <ProductCardRow>
            {matchingProducts.map(node => (
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
