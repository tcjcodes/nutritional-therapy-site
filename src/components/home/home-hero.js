import { Button, Container, Hero, HeroBody, Title, Subtitle } from "bloomer";
import React from "react";
import { secondaryFont } from "../../utils/fonts";

const HomeHero = ({ background }) => (
  <Hero
    isSize="large"
    isColor="dark"
    style={{
      marginTop: "1.25em",
      position: "relative",
      overflow: "hidden",
      backgroundColor: "#000"
    }}
  >
    {background}
    <HeroBody>
      <Container hasTextAlign="centered">
        <div
          css={{
            marginBottom: "1.5rem"
          }}
        >
          <Title isSize={3}>Holistic Nutrition &amp; Wellness</Title>
        </div>
        <Subtitle isSize={5} css={{ fontWeight: "bold" }}>
          Practicing Functional Nutritional Therapy,<br/>Applied Psycho-Neurobiology,<br/>&amp; Family Constellation
        </Subtitle>
        <div
          css={{
            marginTop: "2.5rem"
          }}
        >
          <Button href="/services/" isColor="dark">
            Learn More
          </Button>
        </div>
      </Container>
    </HeroBody>
  </Hero>
);

export default HomeHero;
