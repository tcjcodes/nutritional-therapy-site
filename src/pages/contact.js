import { Box, Column, Columns, Container, Heading, Section } from "bloomer";
import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import ContactForm from "../components/contact-form";
import ExternalLink from "../components/external-link";
import Layout from "../components/layout";
import OfficeMap from "../components/office-map";
import PageHeader from "../components/page-header";

const mapCenter = { lat: 43.6169187, lng: -116.2039708 };
const directionsLink =
  "https://www.google.com/maps/dir//410+S+Orchard+St+2nd+Fl+Suite+124,+Boise,+ID+83705/@43.6007953,-116.2450868,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x54ae5629baddbd73:0xf292d0168122b790!2m2!1d-116.2428981!2d43.6007953!3e0";

const address = {
  streetLine: "410 S Orchard, 2nd Fl Suite 124",
  cityStateZip: "Boise, ID 83705"
};

const ContactPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout>
      <Section>
        <Helmet title={`Contact | ${siteTitle}`} />
        <Container>
          <PageHeader center title="Contact" />
          <Columns isMultiline={true}>
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
            </Column>
            <Column isSize={7} isOffset={1} style={{ paddingRight: "2rem" }}>
              <Heading>send a message</Heading>
              <ContactForm />
            </Column>
            <Column isSize={3}>
              <div>
                <Heading>new clients</Heading>
                <p>
                  I provide a free 30 minute consultation for new clients. Send
                  a message with the form on the left to request an appointment.
                </p>
              </div>
              <div css={{ margin: "1rem 0" }}>
                <Heading>address</Heading>

                <address>{address.streetLine}</address>
                <address>{address.cityStateZip}</address>
                <address>
                  <strong>
                    <ExternalLink href={directionsLink} text="Directions" />
                  </strong>
                </address>
              </div>
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
