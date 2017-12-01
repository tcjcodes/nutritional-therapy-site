import React from 'react'
import { secondaryFont } from '../utils/fonts'
import { Button, Container, Hero, HeroBody, Subtitle, Title } from 'bloomer'
import bgImg from './images/hero0.jpeg'
const rgba = '255,255,255'//`119, 139, 64`
const bgLinearGradient = `linear-gradient(rgba(${rgba}, 0.8), rgba(${rgba}, 0.8))`;

const HeroBanner = ({}) =>
    <Hero isSize='medium' isColor='light' style={{
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
                    CDLR Nutritional Therapy
                </Title>
                <Subtitle>
                    Health and wellness, lorem ipsum dolores.
                </Subtitle>
                <Button href='#about' style={{ marginTop: '1.5em' }} isColor='primary'>Learn More</Button>
            </Container>
        </HeroBody>
    </Hero>

HeroBanner.propTypes = {}

export default HeroBanner

