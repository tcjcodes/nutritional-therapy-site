import { Column, Columns, Container, Section, Content, Box } from 'bloomer';
import Link from 'gatsby-link';
import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PageHeader from '../components/page-header';

const pageTitle = 'New Clients';
const ClientFormsPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const imgSizes = data.file.childImageSharp.fluid;
  return (
    <Layout>
      <Section>
        <Helmet title={`${pageTitle} | ${siteTitle}`} />
        <Container>
          <Columns isVCentered={true}>
            <Column isSize={3} isOffset={1}>
              <Box>
                <Img
                  fluid={imgSizes}
                  alt="Sprouting plant. Photo by icon0.com from Pexels"
                />
              </Box>
            </Column>
            <Column>
              <div css={{ paddingLeft: '2em' }}>
                <PageHeader title={pageTitle} />
                <Content>
                  <div css={{ marginBottom: '2em', marginRight: '1.5em' }}>
                    <p>
                      I provide a free 20 minute consultation for new clients.
                    </p>
                    <p>
                      Send a message on the <Link to="/contact">contact</Link>{' '}
                      page to request an appointment.
                    </p>
                    <p>
                      For current clients, please fill out the following forms
                      and bring them to your next appointment:
                      <ol>
                        <li>
                          <a
                            title="Initial Interview Form"
                            href="/documents/forms/InitialInterview.pdf"
                          >
                            Initial Interview (PDF)
                          </a>
                        </li>
                        <li>
                          <a
                            title="Disclaimer Form"
                            href="/documents/forms/Disclaimer.pdf"
                          >
                            Disclaimer (PDF)
                          </a>
                        </li>
                      </ol>
                    </p>
                  </div>
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
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default ClientFormsPage;
