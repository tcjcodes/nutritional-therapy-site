import { Columns, Container, Section } from 'react-bulma-components';
import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import LabCard from '../components/labs/lab-card';
import Layout from '../components/layout';
import PageHeader from '../components/page-header';
import ProductCardRow from '../components/products/product-card-row';

const pageTitle = 'Lab Tests';

const mapEdgesToLabs = function mapMarkdownEdgesToLabItems(edges) {
  return edges
    .map((edge) => edge.node)
    .map((node) => {
      const { id, frontmatter, fields } = node;
      const { slug } = fields;
      const { title, image } = frontmatter;
      return {
        id,
        frontmatter,
        slug,
        title,
        image,
      };
    });
};

const LabsTemplate = ({ data }) => {
  const { title } = data.site.siteMetadata;
  const { edges } = data.allMarkdownRemark;
  const labs = mapEdgesToLabs(edges);
  return (
    <Layout>
      <Section className="section">
        <Helmet title={`${pageTitle} | ${title}`} />

        <Container style={{ padding: '0 1em' }}>
          <PageHeader center title={pageTitle} />

          <div css={{ marginBottom: '3rem' }}>
            <ProductCardRow>
              {labs.map(({ id, slug, image, title }) => (
                <Columns.Column
                  key={id}
                  textAlign="center"
                  desktop={{ size: 3 }}
                  tablet={{ size: 6 }}
                  mobile={{ size: 12 }}
                >
                  <LabCard slug={slug} thumbnail={image} title={title} />
                </Columns.Column>
              ))}
            </ProductCardRow>
          </div>
        </Container>
      </Section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query LabsPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "lab" } } }
      sort: {
        fields: [frontmatter___category, frontmatter___title]
        order: ASC
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            templateKey
            title
            image
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default LabsTemplate;
