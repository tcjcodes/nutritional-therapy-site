import React from 'react'
import { Box, Column, Columns, Container, Heading, Section } from 'bloomer'
import PageHeader from '../components/page-header'
import ContactForm from '../components/contact-form'
import OfficeMap from '../components/office-map'
import FormsButton from '../components/review-forms-modal-button'

const ContactPage = ({}) => {
  return (
    <Section>
      <Container>
        <PageHeader center title="Contact Us" />

        <Columns isMultiline={true}>
          <Column isSize={10} isOffset={1}>
            <Box style={{ marginBottom: '2em' }}>
              <OfficeMap />
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

              <address>280 North 8th Street</address>
              <address>Suite #118</address>
              <address>Boise, ID 83702</address>
            </div>
          </Column>
        </Columns>
      </Container>
    </Section>
  )
}

export default ContactPage
