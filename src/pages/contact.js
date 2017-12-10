import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Column,
  Columns,
  Container,
  Content,
  Image,
  Section,
  Title,
} from 'bloomer'
import img from '../img/beauty/alex-mihis-33693.jpg'
import { secondaryFont, serifFont, serifFontBold } from '../utils/fonts'
import PageHeader from '../components/page-header'

const ContactPage = ({}) => (
  <Section>
    <Container>
      <Columns>
        <Column isSize={8} isOffset={2}>
          <PageHeader title="Contact Me" />

          <p>
            Morbi in scelerisque elit, id efficitur ipsum. Fusce faucibus
            finibus metus, in condimentum lectus condimentum vitae. In
            scelerisque pretium erat id scelerisque. Phasellus vestibulum diam
            nec dui ultrices pharetra. Mauris posuere eros euismod libero
            laoreet, eget imperdiet leo suscipit. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean a
            urna convallis, porta augue eu, semper elit. Sed felis velit,
            vehicula sed placerat ac, pellentesque nec dui. Nulla eu nibh
            condimentum, laoreet purus vitae, ultricies est.
          </p>
        </Column>
      </Columns>
    </Container>
  </Section>
)

ContactPage.propTypes = {}

export default ContactPage
