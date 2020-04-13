import { Button, Container, Hero, HeroBody, Title, Subtitle } from 'bloomer';
import React from 'react';
import styled from '@emotion/styled';
import { cx, css } from 'emotion';

const HeroRule = css`
margin-top: 1.25em;
position: relative;
overflow: hidden;
background-color: #000;
`;
const StyledHero = props => (
        <Hero
            {...props}
            className={cx(props.className, HeroRule)
            }
        />
    )
;

const HomeHero = ({ background }) => (
    <StyledHero
        isSize="large"
        isColor="dark"
        className={HeroRule}
    >
        {background}
        <HeroBody>
            <Container hasTextAlign="centered">
                <div
                    css={{
                        marginBottom: '1.5rem'
                    }}
                >
                    <Title isSize={3}>Holistic Nutrition &amp; Wellness</Title>
                </div>
                <Subtitle isSize={5} css={{ fontWeight: 'bold' }}>
                    Practicing Functional Nutritional Therapy,<br/>Applied Psycho-Neurobiology,<br/>&amp; Family
                    Constellation
                </Subtitle>
                <div
                    css={{
                        marginTop: '2.5rem'
                    }}
                >
                    <Button href="/services/" isColor="dark">
                        Learn More
                    </Button>
                </div>
            </Container>
        </HeroBody>
    </StyledHero>
);

export default HomeHero;
