import React from 'react'
import { secondaryFont } from '../utils/fonts'
import { Button, Container, Hero, HeroBody, Subtitle, Title } from 'bloomer'
import bgImg from '../img/igor-ovsyannykov-248222.jpg'
const rgba = '0,0,0'//`119, 139, 64`
const bgLinearGradient = `linear-gradient(rgba(${rgba}, 0.2), rgba(${rgba}, 0.4))`;

const HeroBanner = ({}) =>
    <Hero isSize='medium' isColor='dark' style={{
    }}>
        <HeroBody style={{
            background:`${bgLinearGradient}, url(${bgImg}) center no-repeat fixed`,
            backgroundSize: 'cover',
        }}>
            <Container hasTextAlign='centered'>
                <Title style={{
                    ...secondaryFont,
                    fontSize: '4em', // increase
                    marginBottom: '1em',
                    letterSpacing: '4px',
                }}>
                    Eating Well
                </Title>
                <Subtitle>
                    Health and wellness, lorem ipsum dolores.
                </Subtitle>
                <Button href='/about/' style={{ marginTop: '1.5em' }} isColor='dark'>Learn More</Button>
            </Container>
        </HeroBody>
    </Hero>

HeroBanner.propTypes = {}

export default HeroBanner

