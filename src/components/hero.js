import { Button, Container, Hero, HeroBody, Title } from 'bloomer'
import React from 'react'
import { Background, Parallax } from 'react-parallax'
import { secondaryFont } from '../utils/fonts'

const rgba = "0,0,0"; //`119, 139, 64`
const bgLinearGradient = `linear-gradient(rgba(${rgba}, 0.3), rgba(${rgba}, 0.5))`;

const HeroBanner = ({ children }) => (
  <Hero isSize="large" isColor="dark" style={{ marginTop: "1.25em" }}>
    <Parallax strength={400}>
      <Background>
        <div css={{ width: "100vw" }}>{children}</div>
      </Background>

      <HeroBody
        style={{
          background: `${bgLinearGradient}`,
          backgroundSize: "cover"
        }}
      >
        <Container hasTextAlign="centered">
          <Title
            style={{
              ...secondaryFont,
              fontSize: '5em', // increase
            }}
          >
            Holistic Nutrition &amp; Wellness
          </Title>
          <Button href="/about/" style={{ marginTop: "1.5em" }} isColor="dark">
            Learn More
          </Button>
        </Container>
      </HeroBody>
    </Parallax>
  </Hero>
);

export default HeroBanner;
