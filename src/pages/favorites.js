import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link'
import {
    Card, CardContent, CardImage, Column, Columns, Container, Content, Image, Section, Subtitle,
    Title
} from 'bloomer'
import { secondaryFont, serifFontBold } from '../utils/fonts'
import { colorGreenDark } from '../utils/theme-variables'

export default function FavoritesTemplate({ data }) {
    const edges = data.allMarkdownRemark.edges;
    return (
        <Section className='section'>
            <Helmet title='Favorites'/>

            <Container>
                {/*<Title isSize={2}
                       hasTextAlign="centered"
                       style={{
                           ...secondaryFont,
                           color: colorGreenDark
                       }}>My Favorites</Title>*/}
                <Columns isMultiline={true} isCentered={true} isGrid={true}>{edges.map(({ node }) => (
                    <Column isSize={{ mobile: 1, tablet: '1/3', desktop: '1/3' }} key={node.id}>
                        <Card>
                            <CardImage style={{}}>
                                <Image src={node.frontmatter.images[0].image}/>
                            </CardImage>
                            <CardContent>
                                <Content>
                                    <Subtitle
                                        isSize={3}
                                        style={{
                                            ...secondaryFont,
                                            marginBottom: '0.25em',
                                            color: colorGreenDark
                                        }}>{node.frontmatter.title}</Subtitle>
                                    <p>{node.excerpt}</p>
                                    <Link style={{
                                        ...serifFontBold,
                                    }} to={node.fields.slug}>Read More &#10230;</Link>
                                </Content>
                            </CardContent>
                        </Card>
                    </Column>
                ))}
                </Columns>

            </Container>
        </Section>
    );
}

export const pageQuery = graphql`
    query FavoritePageQuery {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "favorite-item"}}}) {
            edges {
                node {
                    id
                    excerpt(pruneLength:75)
                    frontmatter {
                        title
                        link
                        images {
                            image
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;
