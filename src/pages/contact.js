import React from 'react'
import Img from 'gatsby-image'
import {
    Box,
    Button,
    Checkbox,
    Column,
    Columns,
    Container,
    Control,
    Field,
    FieldBody,
    FieldLabel,
    Heading,
    Input,
    Modal,
    ModalBackground,
    ModalClose,
    ModalContent,
    Section,
    Select,
    TextArea,
} from 'bloomer'
import PageHeader from '../components/page-header'

const ContactPage = ({ data }) => {
  const res1 = data.image1.childImageSharp.resolutions
  const res2 = data.image2.childImageSharp.resolutions

  return (
    <Section>
      <Container>
        <Columns>
          <Column isSize={8} isOffset={1} style={{ paddingRight: '2rem' }}>
            <PageHeader title="Contact Me" />
            <Field>
              <FieldBody>
                <Field isGrouped>
                  <Control isExpanded hasIcons="right">
                    <Input isSize="small" placeholder="First Name" />
                  </Control>
                </Field>
                <Field>
                  <Control hasIcons={['right']}>
                    <Input isSize="small" placeholder="Last Name" />
                  </Control>
                </Field>
              </FieldBody>
            </Field>

            <Field>
              <Control>
                <Input isSize="small" type="text" placeholder="Email" />
              </Control>
            </Field>

            <Field>
              <Control>
                <Select isSize="small">
                  <option selected disabled>
                    Choose Subject of Message
                  </option>
                  <option>Questions</option>
                  <option>Book Consultation</option>
                  <option>Book Appointment</option>
                  <option>Other</option>
                </Select>
              </Control>
            </Field>

            <Field>
              <FieldLabel />
              <FieldBody>
                <Field>
                  <Control>
                    <TextArea isSize="small" placeholder="Message" />
                  </Control>
                </Field>
              </FieldBody>
            </Field>

            <Field>
              <FieldBody>
                <Control>
                  <Checkbox isSize="small" required>
                    {' '}
                    I have reviewed the documents{' '}
                  </Checkbox>
                </Control>
              </FieldBody>
            </Field>

            <Field>
              <FieldBody>
                <Field>
                  <Control>
                    <Button isColor="primary">Submit</Button>
                  </Control>
                </Field>
              </FieldBody>
            </Field>
          </Column>
          <Column isSize={3}>
            <div css={{ marginBottom: `1rem` }}>
              <Heading>Office Address</Heading>
              <address>280 North 8th Street</address>
              <address>Suite #118</address>
              <address>Boise, ID 83702</address>
              <a href="www.google.com">View Map</a>

              <Modal isActive={false}>
                <ModalBackground />
                <ModalContent>
                  <Box>
                    <Columns>
                      <Column isSize={6}>
                        <Img resolutions={res1} />
                      </Column>
                      <Column isSize={6}>
                        <Img resolutions={res2} />
                      </Column>
                    </Columns>
                  </Box>
                </ModalContent>
                <ModalClose />
              </Modal>
            </div>

            <div css={{ marginBottom: `1rem` }}>
              <Heading>Office Hours</Heading>
              <dl>
                <dt>Mon - Fri</dt>
                <dd>10:00 am - 4:00 pm</dd>
              </dl>
            </div>
            <div>
              <Heading>Appointments</Heading>
              <p>
                If you're interested in booking an appointment, please review
                these forms before proceeding.
              </p>
              <Button
                style={{ margin: `1rem 0` }}
                isSize="small"
                isColor="dark"
                isOutlined={true}
              >
                Review Forms
              </Button>
            </div>
          </Column>
        </Columns>
      </Container>
    </Section>
  )
}
export const query = graphql`
  query ContactPageQuery {
    image1: file(relativePath: { eq: "contact/bldg1.jpg" }) {
      childImageSharp {
        resolutions(width: 315, height: 230) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
    image2: file(relativePath: { eq: "contact/bldg2.jpg" }) {
      childImageSharp {
        resolutions(width: 315, height: 230) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`

export default ContactPage
