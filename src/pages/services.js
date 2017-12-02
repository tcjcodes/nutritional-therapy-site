import React from 'react'
import PropTypes from 'prop-types'
import { Button, Column, Columns, Container, Content, Hero, HeroBody, Image, Section, Title } from 'bloomer'
import bgImg from '../img/caroline-attwood-225496.jpg'
import { secondaryFont, serifFont } from '../utils/fonts'

const rgba = '0,0,0'//`119, 139, 64`
const bgLinearGradient = `linear-gradient(rgba(${rgba}, 0.2), rgba(${rgba}, 0.4))`;

const ContactPage = ({}) => <Section>
    <Container>
        <Hero isSize='small' isColor='dark' style={{
        }}>
            <HeroBody style={{
                background:`${bgLinearGradient}, url(${bgImg}) center no-repeat`,
                backgroundSize: 'cover',
            }}>
                <Container hasTextAlign='centered'>
                    <Title style={{
                        ...secondaryFont,
                        fontSize: '4em', // increase
                        marginBottom: '1em',
                        letterSpacing: '4px',
                    }}>
                        Services
                    </Title>
                </Container>
            </HeroBody>
        </Hero>
        <Columns>
            <Column isSize={8} isOffset={2}>
                {/*<Title style={{ ...secondaryFont, letterSpacing: '2px', }}
                       isSize={2}
                       hasTextColor='dark'>Services</Title>*/}
<p>TODO</p>
            </Column>
        </Columns>
    </Container>
</Section>

ContactPage.propTypes = {}

export default ContactPage

