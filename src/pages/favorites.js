import React from 'react';
import Helmet from 'react-helmet';
import { Container, Section } from 'bloomer'

export default function FavoritesTemplate({ data }) {
    const edges = data.allMarkdownRemark.edges;
    return (
        <Section className='section'>
            <Helmet title='Favorites'/>

            <Container>
                {edges.map(({ node  }) => (
                    <pre key={node.id}>
                        {/*{JSON.stringify(node)}*/}
                        {node.frontmatter.title},
                        {node.frontmatter.templateKey},
                        {node.frontmatter.date}
                    </pre>
                ))}
            </Container>
        </Section>
    );
}

export const pageQuery = graphql`
    query FavoritePageQuery {
        allMarkdownRemark {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        templateKey
                        date(formatString: "DD MMMM, YYYY")
                    }
                    excerpt
                }
            }
        }
    }
`;
