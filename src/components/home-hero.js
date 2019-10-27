import { Button, Container, Hero, HeroBody, Title, Subtitle } from "bloomer";
import React from "react";
import { secondaryFont } from "../utils/fonts";

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
        <Title
          style={{
            ...secondaryFont,
            fontSize: "5em", // increase
            marginBottom: "0.5em"
          }}
        >
          Holistic Nutrition &amp; Wellness
        </Title>
        <Subtitle style={{ fontWeight: "bold" }}>
          Practicing nutritional therapy in Boise, ID
        </Subtitle>
        <Button href="/services/" style={{ marginTop: "1.5em" }} isColor="dark">
          Learn More
        </Button>
      </Container>
    </HeroBody>
  </Hero>
);

export default HomeHero;
