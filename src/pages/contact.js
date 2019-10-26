import React from 'react'
import Helmet from 'react-helmet'
import { Box, Column, Columns, Container, Heading, Section } from 'bloomer'
import PageHeader from '../components/page-header'
import ContactForm from '../components/contact-form'
import OfficeMap from '../components/office-map'
import FormsButton from '../components/review-forms-modal-button'

const mapCenter = { lat: 43.616931, lng: -116.201875 }
const directionsLink =
  'https://www.google.com/maps/dir/280+N+8th+St,+Boise,+ID+83702/@43.6169187,-116.2039708,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54aef8e38170803d:0xa94fa462f5031011!2m2!1d-116.2018726!2d43.6169343'

const ContactPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Section>
      <Helmet title={`Contact | ${siteTitle}`} />
      <Container>
        <PageHeader center title="Contact Us" />
        <Columns isMultiline={true}>
          <Column isSize={10} isOffset={1}>
            <Box style={{ marginBottom: '2em', minHeight: '350px' }}>
              <OfficeMap
                zoom={15}
                mapCenter={mapCenter}
                containerStyles={{ height: '400px' }}
              >
                <strong>Idaho Building</strong>
                <br />
                <br />
                <address css={{ color: '#000' }}>
                  410 S Orchard, 2nd Floor Suite 124
                </address>
                <address css={{ color: '#000' }}>Boise, ID 83705</address>
                <a
                  href={directionsLink}
                  target="_blank"
                  css={{ color: '#427fed' }} // Google Map link
                >
                  Get Directions
                </a>
              </OfficeMap>
            </Box>
          </Column>
          <Column isSize={7} isOffset={1} style={{ paddingRight: '2rem' }}>
            <Heading>send a message</Heading>
            <ContactForm />
          </Column>
          <Column isSize={3}>
            <div>
              <Heading>appointments</Heading>
              <p>
                If you're interested in booking a consultation, please review
                these forms before proceeding.
              </p>
              <FormsButton />
            </div>
            <div css={{ marginBottom: '1rem' }}>
              <Heading>address</Heading>

              <address>Idaho Building</address>
              <address>280 N 8th St, Suite #118</address>
              <address>Boise, ID 83702</address>
            </div>
          </Column>
        </Columns>
      </Container>
    </Section>
  )
}

export const query = graphql`
  query ContactPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default ContactPage
