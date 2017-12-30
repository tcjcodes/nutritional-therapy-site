import React from 'react'
import {
  Button,
  Column,
  Columns,
  Container,
  Content,
  Heading,
  Section,
} from 'bloomer'
import { serifFont } from '../utils/fonts'
import PageHeader from '../components/page-header'
import { colorBrown } from '../utils/theme-variables'
import StyledIcon from '../components/styled-icon'

const Service = ({ name, children }) => (
  <Columns style={{ marginBottom: `2rem` }}>
    <Column isSize={3} isOffset={1 / 2} style={{ marginTop: 0 }}>
      <Heading
        style={{
          ...serifFont,
          color: colorBrown,
          textAlign: 'right',
          textTransform: 'lowercase',
        }}
      >
        {name}
      </Heading>
    </Column>
    <Column isSize={8} style={{ paddingLeft: `1rem` }}>
      <Content>{children}</Content>
    </Column>
  </Columns>
)

const ServicesPage = ({ data }) => {
  const { servicesList } = data.markdownRemark.frontmatter
  return (
    <Section>
      <Container>
        <Columns>
          <Column
            isSize={3}
            isOffset={3}
            style={{ textAlign: 'left', padding: `0 0 0 1em` }}
          >
            <PageHeader title="services" />
          </Column>
        </Columns>
        {servicesList.map((service, index) => (
          <Service key={index} name={service.name}>
            <p>{service.description}</p>
          </Service>
        ))}
        <div css={{ textAlign: 'center' }}>
          <Button isColor="primary" href="/contact/">
            <StyledIcon name="calendar" />
            Book Appointment
          </Button>
        </div>
      </Container>
    </Section>
  )
}
ServicesPage.propTypes = {}

export const query = graphql`
  query ServicesPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        servicesList {
          name
          description
        }
      }
    }
  }
`

export default ServicesPage
