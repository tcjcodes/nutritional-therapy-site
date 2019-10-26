import { Container, Section } from "bloomer";
import Link from "gatsby-link";
import React from "react";
import Helmet from "react-helmet";
import PageHeader from "../components/page-header";
import ProductCard from "../components/product-card";
import ProductCardColumn from "../components/product-card-column";
import ProductCardRow from "../components/product-card-row";
import ProductCategoryHeading from "../components/product-category-heading";

const pageTitle = "All Labs";
const sortProducts = edges => {
  let categorized = {};
  edges
    .map(edge => edge.node)
    .forEach(node => {
      const { id, frontmatter, fields, excerpt } = node;
      const { categoryKey, slug } = fields;
      if (!categorized[categoryKey]) {
        categorized[categoryKey] = [];
      }

      const { title, image } = frontmatter;
      categorized[categoryKey].push({
        id,
        slug,
        excerpt,
        title,
        image
      });
    });
  return categorized;
};

const ProductsTemplate = ({ data }) => {
  const edges = data.allMarkdownRemark.edges;
  const categories = sortProducts(edges);
  const { title } = data.site.siteMetadata;
  return (
    <Section className="section">
      <Helmet title={`${pageTitle} | ${title}`} />

      <Container style={{ padding: "0 1em" }}>
        <PageHeader center title={pageTitle} />

        <div>
          {Object.keys(categories).map(key => (
            <div key={key} css={{ marginBottom: "3rem" }}>
              <ProductCategoryHeading>
                <Link to={`/product-categories/${key}/`}>{key}</Link>
              </ProductCategoryHeading>
              <ProductCardRow>
                {categories[key].map(c => (
                  <ProductCardColumn
                    key={c.id}
                    slug={c.slug}
                    thumbnail={c.image}
                    title={c.title}
                    excerpt={c.excerpt}
                  />
                ))}
              </ProductCardRow>
              {/*<ProductCardRow>
                {categories[key].map(c => (
                  <ProductCardColumn key={c.id}>
                    <ProductCard
                      slug={c.slug}
                      thumbnail={c.image}
                      title={c.title}
                      excerpt={c.excerpt}
                    />
                  </ProductCardColumn>
                ))}
              </ProductCardRow>*/}
              {/*{categories[key].length === CUTOFF_LENGTH && (
                <div css={{ textAlign: 'center' }}>
                  <Link
                    css={{ ...serifFont, colorBrownDark }}
                    to={`/product-categories/${key}`}
                  >
                    See More...
                  </Link>
                </div>
              )}*/}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

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
`;

export default ProductsTemplate;
