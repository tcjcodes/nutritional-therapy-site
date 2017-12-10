import React from 'react'
import { secondaryFont } from '../utils/fonts'
import {
  Button,
  Container,
  Hero,
  HeroBody,
  Image,
  Section,
  Subtitle,
  Title,
} from 'bloomer'

import bgImg from '../img/image0.jpg'
import { Background, Parallax } from 'react-parallax'

const rgba = '0,0,0' //`119, 139, 64`
const bgLinearGradient = `linear-gradient(rgba(${rgba}, 0.3), rgba(${rgba}, 0.4))`

const HeroBanner = ({}) => (
  <Hero isSize="medium" isColor="dark" style={{ marginTop: '1.25em' }}>
    <Parallax strength={400}>
      <Background>
        <div css={{ width: '100vw', maxWidth: '2400px', height: 'auto' }}>
          <Image src={bgImg} />
        </div>
      </Background>
      <HeroBody
        style={{
          background: `${bgLinearGradient}`,
          backgroundSize: 'cover',
        }}
      >
        <Container hasTextAlign="centered">
          <Title
            style={{
              ...secondaryFont,
              fontSize: '4em', // increase
              marginBottom: '1em',
              letterSpacing: '4px',
            }}
          >
            Eating Well
          </Title>
          <Subtitle style={{ fontWeight: 'bold' }}>
            Health and wellness, lorem ipsum dolores.
          </Subtitle>
          <Button href="/about/" style={{ marginTop: '1.5em' }} isColor="dark">
            Learn More
          </Button>
        </Container>
      </HeroBody>
    </Parallax>
  </Hero>
)

HeroBanner.propTypes = {}

export default HeroBanner
