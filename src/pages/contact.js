import { Column, Columns, Container, Heading, Section } from 'bloomer';
import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import ContactForm from '../components/contact/contact-form';
import Layout from '../components/layout';
import PageHeader from '../components/page-header';
// import ExternalLink from '../components/shared/external-link';

// const mapCenter = { lat: 43.6169187, lng: -116.2039708 };
// const directionsLink = 'https://goo.gl/maps/xBhPNMVmz96YwTs86';

// const address = {
//   streetLine: '9050 W Overland Rd #135',
//   cityStateZip: 'Boise, ID 83709',
// };

const ContactPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout>
      <Section>
        <Helmet title={`Contact | ${siteTitle}`} />
        <Container>
          <PageHeader center title="Contact" />
          <Columns isMultiline={true}>
            {/*TODO: Re-add when API key hidden
            <Column isHidden="mobile" isSize={10} isOffset={1}>
              <Box style={{ marginBottom: "2em", minHeight: "350px" }}>
                <OfficeMap
                  zoom={15}
                  mapCenter={mapCenter}
                  containerStyles={{ height: "400px" }}
                >
                  <strong>Office</strong>
                  <br />
                  <br />
                  <address css={{ color: "#000" }}>
                    {address.streetLine}
                  </address>
                  <address css={{ color: "#000" }}>
                    {address.cityStateZip}
                  </address>
                  <ExternalLink
                    href={directionsLink}
                    css={{ color: "#427fed" }} // Google Map link
                    text="Get Directions"
                  />
                </OfficeMap>
              </Box>
            </Column>*/}
            <Column isSize={7} isOffset={1} style={{ paddingRight: '2rem' }}>
              <Heading>Send a message</Heading>
              <ContactForm />
            </Column>
            <Column isSize={3}>
              <div>
                <Heading>new clients</Heading>
                <p>
                  I provide a free 20 minute consultation for new clients. Send
                  a message with the form to request an appointment.
                </p>
              </div>
              {/*<div css={{ margin: '1rem 0' }}>
                <Heading>address</Heading>

                <address>
                  <ExternalLink
                    css={{ fontWeight: 'bold' }}
                    href={directionsLink}
                  >
                    {address.streetLine}
                    <br />
                    {address.cityStateZip}
                  </ExternalLink>
                </address>
                <address>
                  <strong>
                    <ExternalLink href={directionsLink}>
                      Directions
                    </ExternalLink>
                  </strong>
                </address>
              </div>*/}
            </Column>
          </Columns>
        </Container>
      </Section>
    </Layout>
  );
};

export const query = graphql`
  query ContactPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default ContactPage;
