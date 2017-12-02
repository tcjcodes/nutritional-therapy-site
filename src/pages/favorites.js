import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link'
import { Container, Content, Section } from 'bloomer'

export default function FavoritesTemplate({ data }) {
    const edges = data.allMarkdownRemark.edges;
    return (
        <Section className='section'>
            <Helmet title='Favorites'/>

            <Container>
                {edges.map(({ node }) => (
                    <Content key={node.id}>
                        <h1><Link to={node.fields.slug}>{node.frontmatter.title}</Link></h1>
                        <img src={node.frontmatter.thumbnails[0]} alt=''/>
                        {JSON.stringify(node.frontmatter)}
                        {JSON.stringify(node.fields)}
                    </Content>
                ))}
            </Container>
        </Section>
    );
}

export const pageQuery = graphql`
    query FavoritePageQuery {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "favorite-item"}}}) {
            edges {
                node {
                    frontmatter {
                        title
                        link
                        thumbnails {
                            thumbnail
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
