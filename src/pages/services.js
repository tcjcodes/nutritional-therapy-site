import React from 'react'
import PropTypes from 'prop-types'
import { Button, Column, Columns, Container, Content, Hero, HeroBody, Image, Section, Subtitle, Title } from 'bloomer'
import bgImg from '../img/caroline-attwood-225496.jpg'
import { secondaryFont, serifFont, serifFontBold } from '../utils/fonts'
import img from '../img/caroline-attwood-225496.jpg'
import PageHeader from '../components/page-header'

const rgba = '0,0,0'//`119, 139, 64`
const bgLinearGradient = `linear-gradient(rgba(${rgba}, 0.2), rgba(${rgba}, 0.4))`;

const Service = ({ name, children, }) => <Columns>
    <Column isSize={3} isOffset={1 / 2} style={{ paddingRight: '2em', }}>
        <Subtitle style={{ ...serifFontBold, textAlign: 'right', }}
                  hasTextColor='dark'>{name}</Subtitle>
    </Column>
    <Column isSize={8}>
        <Content>
            {children}
        </Content>
    </Column>
</Columns>

const ContactPage = ({}) => (
    <Section>
        <Container>
            <Columns>
                <Column isSize={3} isOffset={3} style={{ paddingRight: '2em', textAlign: 'left', }}>
                    <PageHeader title='services' />
                </Column>
            </Columns>
            <Service name='First Consultation'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac eros eros. Aliquam sit
                    amet nunc
                    vehicula dui rutrum euismod non id lacus. Nunc nec velit viverra, congue elit in, laoreet
                    velit.
                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Mauris ac
                    ipsum non est fermentum interdum.</p>
                <p>Praesent commodo augue mi, id sagittis quam pharetra non.
                    Nunc
                    sodales vestibulum lorem nec mollis. Phasellus congue tempus dolor, ut interdum massa. Proin
                    vel
                    neque rhoncus, pretium justo vitae, feugiat turpis. Aliquam quis porta risus. Sed a
                    tincidunt nisi.
                    Nunc accumsan iaculis dictum.</p></Service>
            <Service name='Dietary Elip Turpis Quis'>
                <p>Phasellus congue tempus dolor, ut interdum massa. Proin
                    vel
                    neque rhoncus, pretium justo vitae, feugiat turpis. Aliquam quis porta risus. Sed a
                    tincidunt nisi.
                    Nunc accumsan iaculis dictum.</p></Service>

            <Service name='Justo vitae aliquam'>
                <p>Morbi in scelerisque elit, id efficitur ipsum. Fusce faucibus finibus metus, in condimentum lectus
                    condimentum vitae. In scelerisque pretium erat id scelerisque. Phasellus vestibulum diam nec dui
                    ultrices pharetra. Mauris posuere eros euismod libero laoreet, eget imperdiet leo suscipit.
                </p>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean a
                    urna convallis, porta augue eu, semper elit. Sed felis velit, vehicula sed placerat ac, pellentesque
                    nec dui. Nulla eu nibh condimentum, laoreet purus vitae, ultricies est.</p></Service>

            <div css={{ textAlign: 'center', }}><Button isColor='primary' href='/contact/'>Book Appointment</Button></div>
        </Container>
    </Section>
)

ContactPage.propTypes = {}

export default ContactPage

