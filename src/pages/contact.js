import React from 'react'
import PropTypes from 'prop-types'
import { Button, Column, Columns, Container, Content, Image, Section, Title } from 'bloomer'
import img from '../img/beauty/alex-mihis-33693.jpg'
import { secondaryFont, serifFont } from '../utils/fonts'

const ContactPage = ({}) => <Section>
    <Container>
        <Columns>
            <Column isSize={8} isOffset={2}>
                <Title style={{ ...secondaryFont, letterSpacing: '2px', }}
                       isSize={2}
                       hasTextColor='dark'>Contact Me</Title>

            </Column>
        </Columns>
    </Container>
</Section>

ContactPage.propTypes = {}

export default ContactPage

