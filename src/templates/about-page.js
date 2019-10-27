import { Box, Container, Content, Section } from "bloomer";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";

export default ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <Section>
        <Helmet title={`About | ${siteTitle}`} />
        <Container style={{ maxWidth: 800 }}>
          <div
            css={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <PageHeader center title={post.frontmatter.title} />

            <Box style={{ width: 400 }}>
              <Img
                sizes={data.file.childImageSharp.sizes}
                alt="Caroline"
                title="About Caroline"
              />
            </Box>
            <Content dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </Container>
      </Section>
    </Layout>
  );
};

export const query = graphql`
  query AboutPage($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    file(relativePath: { eq: "cdlr0.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 400) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
