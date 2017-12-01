import React from 'react'
import { secondaryFont } from '../utils/fonts'
import { Container, Hero, HeroBody, Subtitle, Title } from 'bloomer'

const bgLinearGradient = `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.8))`;

const HeroBanner = ({}) =>
    <Hero isSize='medium' isColor='light' style={{
        backgroundSize: 'cover',
    }}>
        <HeroBody>
            <Container hasTextAlign='centered'>
                <Title style={{
                    ...secondaryFont,
                    fontSize: '4em',
                    letterSpacing: '4px',
                    fontWeight: 'bold',
                }}>
                    Nutritional Therapy
                </Title>
                <Subtitle className="subtitle">
                    Health and wellness, lorem ipsum dolores.
                </Subtitle>
            </Container>
        </HeroBody>
    </Hero>

HeroBanner.propTypes = {}

export default HeroBanner

