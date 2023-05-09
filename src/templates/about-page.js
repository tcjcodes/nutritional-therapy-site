import { Box, Container, Content, Section } from 'bloomer';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import PageHeader from '../components/page-header';

const AboutPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const { markdownRemark: post, aboutFile } = data;
  return (
    <Layout>
      <Section>
        <Helmet title={`About | ${siteTitle}`} />
        <Container style={{ maxWidth: 960 }}>
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <PageHeader center title={post.frontmatter.title} />

            {aboutFile?.childImageSharp?.fluid && (
              <Box style={{ width: 400, marginBottom: '2rem' }}>
                <Img
                  fluid={aboutFile.childImageSharp.fluid}
                  alt="Caroline"
                  title="About Caroline"
                />
              </Box>
            )}
            <Content
              data-testid="about-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
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
   aboutFile: file(relativePath: { eq: "cdlr3crop.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default AboutPage;
