import { Column, Columns, Container, Section, Content, Box } from "bloomer";
import React from "react";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import ExternalLink from "../components/shared/external-link";
import Layout from "../components/layout";
import PageHeader from "../components/page-header";

const ClientFormsPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const imgSizes = data.file.childImageSharp.sizes;
  return (
    <Layout>
      <Section>
        <Helmet title={`Client Forms | ${siteTitle}`} />
        <Container>
          <Columns isVCentered={true}>
            <Column isSize={3} isOffset={1}>
              <Box>
                <Img
                  sizes={imgSizes}
                  alt="Sprouting plant. Photo by icon0.com from Pexels"
                />
              </Box>
            </Column>
            <Column>
              <div css={{ paddingLeft: "2em" }}>
                <PageHeader title="Client Forms" />
                <Content>
                  <p css={{ marginBottom: "2em", marginRight: "1.5em" }}>
                    For current clients, please print and fill out the following
                    forms and bring them to your next appointment:
                    <ol>
                      <li>
                        <ExternalLink href="google.com" />
                      </li>
                      <li>
                        <ExternalLink href="google.com" />
                      </li>
                      <li>
                        <ExternalLink href="google.com" />
                      </li>
                      <li>
                        <ExternalLink href="google.com" />
                      </li>
                      <li>
                        <ExternalLink href="google.com" />
                      </li>
                    </ol>
                  </p>
                </Content>
              </div>
            </Column>
          </Columns>
        </Container>
      </Section>
    </Layout>
  );
};

ClientFormsPage.propTypes = {};

export const query = graphql`
  query ClientFormsPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "dirt-gardening-green-1214394.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;

export default ClientFormsPage;
