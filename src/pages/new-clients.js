import { Column, Columns, Container, Section, Content, Box } from 'bloomer';
import Link from 'gatsby-link';
import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PageHeader from '../components/page-header';

const pageTitle = 'New Clients';
const NewClientsPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const imgFluid = data.file.childImageSharp.fluid;
  return (
    <Layout>
      <Section>
        <Helmet title={`${pageTitle} | ${siteTitle}`} />
        <Container>
          <Columns isVCentered={true}>
            <Column isSize={3} isOffset={1}>
              <Box>
                <Img
                  fluid={imgFluid}
                  alt="Sprouting plant. Photo by icon0.com from Pexels"
                />
              </Box>
            </Column>
            <Column>
              <div css={{ paddingLeft: '2em' }}>
                <PageHeader title={pageTitle} />
                <Content>
                  <div
                    css={{
                      marginBottom: '2em',
                      marginRight: '1.5em',
                    }}
                  >
                    <p>
                      I provide a{' '}
                      <Link to="/services">free 20 minute consultation</Link>{' '}
                      for new clients.
                    </p>
                    <p>
                      <Link to="/contact">Send a message</Link> to request an
                      appointment.
                    </p>
                    <br />
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

NewClientsPage.propTypes = {};

export const query = graphql`
  query NewClientsPageQuery {
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

export default NewClientsPage;
