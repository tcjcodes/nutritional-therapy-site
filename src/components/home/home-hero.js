import { Button, Container, Heading, Hero } from 'react-bulma-components';
import React from 'react';

const HomeHero = ({ background }) => (
  <Hero
    size='large'
    color='dark'
    style={{
      marginTop: '1.25em',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#000',
    }}
  >
    {background}
    <Hero.Body>
      <Container textAlign='centered'>
        <div
          css={{
            marginBottom: '1.5rem',
          }}
        >
          <Heading data-testid='landing-title' size={3}>
            Holistic Nutrition &amp; Wellness
          </Heading>
        </div>
        <Heading subtitle data-testid='landing-subtitle' size={5}>
          Practicing Functional Nutritional Therapy,
          <br />
          Applied Psycho-Neurobiology,
          <br />
          &amp; Family Constellation
        </Heading>
        <div
          css={{
            marginTop: '2.5rem',
          }}
        >
          <Button href='/services/' color='dark'>
            Learn More
          </Button>
        </div>
      </Container>
    </Hero.Body>
  </Hero>
);

export default HomeHero;
