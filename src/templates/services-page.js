import { Button, Container, Content, Section } from 'react-bulma-components';
import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import PageHeader from '../components/page-header';

const ServicesPage = ({ data }) => {
  const { title } = data.site.siteMetadata;
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Section>
        <Helmet title={`Services | ${title}`} />

        <Container style={{ maxWidth: 960 }}>
          <PageHeader title='Services' center />

          <div css={{ marginBottom: `2rem` }}>
            <Content
              data-testid='services-content'
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>

          <div css={{ textAlign: 'center' }}>
            <Button color='primary' href='/contact/'>
              <span
                className='fa fa-calendar'
                css={{ marginRight: `0.5rem` }}
              />
              Request appointment
            </Button>
          </div>
        </Container>
      </Section>
    </Layout>
  );
};

export const query = graphql`
    query ServicesPage($slug: String!) {
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
    }
`;

export default ServicesPage;
