import { Box, Column, Columns, Container, Content, Image, Section, Title } from 'bloomer'
import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import BreadcrumbLink from '../components/shared/breadcrumb-link'
import Layout from '../components/layout'
import { secondaryFont } from '../utils/fonts'

export default function LabTemplate({ data }) {
  const siteTitle = data.site.siteMetadata.title;

  const { markdownRemark: post } = data;
  const { image, title } = post.frontmatter;

  return (
    <Layout>
      <Section className="section">
        <Helmet title={`${title} Labs | ${siteTitle}`} />
        <Container style={{ maxWidth: 800 }}>
          <Columns isVCentered isCentered>
            <Column
                isSize={{ desktop: 6, mobile: 12 }}
                style={{ marginBottom: "1em" }}
            >
              <Box
                  style={{
                    margin: "0 0.5rem 0.5rem 0"
                  }}
              >
                <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "1px solid gainsboro"
                    }}
                    src={__PATH_PREFIX__ + image}
                    alt={title}
                />
              </Box>
            </Column>

            <Column isSize={{ desktop: 6, mobile: 12 }}>
              <div>
                <BreadcrumbLink
                    to={`/labs`}
                    text={`other lab tests`}
                />

                <Title
                    style={{ ...secondaryFont, marginBottom: "0.75rem" }}
                    isSize={2}
                    hasTextColor="dark"
                >
                  {title}
                </Title>
              </div>
            </Column>
          </Columns>

          <div>
            <Content dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query LabPage($slug: String!) {
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
        link
        image
      }
    }
  }
`;
