import React from 'react';
import { Column, Columns, Container, Content, Image, Section, Title } from 'bloomer'
import avatar from '../img/cdlr0.jpg'
import { secondaryFont, serifFont } from '../utils/fonts'

export default ({ data }) => {
    const { markdownRemark: post } = data;
    return (
        <Section>
            <Container>
                <Columns isVCentered={true}>
                    <Column isSize={6} isOffset={1} style={{ paddingRight: '1em', }}>
                        <Title style={{ ...secondaryFont, letterSpacing: '2px', }}
                               isSize={2}
                               hasTextColor='dark'>{post.frontmatter.title}</Title>
                        <Content dangerouslySetInnerHTML={{ __html: post.html }}/>
                    </Column>
                    <Column isSize={4}>
                        <Image isRatio='square' src={avatar}/>
                    </Column>
                </Columns>
            </Container>
        </Section>
    );
};


export const aboutPageQuery = graphql`
    query AboutPage($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
            }
        }
    }
`;
