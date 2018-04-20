import { Button, Column, Columns, Container, Content, Section } from 'bloomer';
import React from 'react';
import PageHeader from '../components/page-header';
import Service from '../components/service';
import Helmet from 'react-helmet';

const ServicesPage = ({ data }) => {
  const { title } = data.site.siteMetadata;
  const { servicesList } = data.markdownRemark.frontmatter;
  return (
    <Section>
      <Helmet title={`Services | ${title}`} />

      <Container style={{ maxWidth: 800 }}>
        <PageHeader title="services" center />

        {servicesList.map((service, index) => (
          <Service key={index} name={service.name}>
            <Content>{service.description}</Content>
          </Service>
        ))}
        <div css={{ textAlign: 'center' }}>
          <Button isColor="primary" href="/contact/">
            <span className="fa fa-calendar" css={{ marginRight: `0.5rem` }} />
            Book Appointment
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export const query = graphql`
  query ServicesPage {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "services-page" } }) {
      frontmatter {
        templateKey
        servicesList {
          name
          description
        }
      }
    }
  }
`;

export default ServicesPage;
