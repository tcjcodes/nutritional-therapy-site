import React from 'react'
import Helmet from 'react-helmet'
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
  const siteTitle = data.site.siteMetadata.title
  const { servicesList, title } = data.markdownRemark.frontmatter
  return (
    <Section>
      <Helmet title={`Services | ${siteTitle}`} />

      <Container>
        <Columns>
          <Column
            isSize={3}
            isOffset={3}
            style={{ textAlign: 'left', padding: `0 0 0 1em` }}
          >
            <PageHeader title={title} />
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
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        servicesList {
          name
          description
        }
      }
    }
  }
`

export default ServicesPage
