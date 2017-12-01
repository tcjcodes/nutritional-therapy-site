import React from 'react';
import Helmet from 'react-helmet';
import { Container, Content, Section, Title } from 'bloomer'

export default function FavoriteItemTemplate({ data }) {
    const { markdownRemark: post } = data;
    return (
        <Section className="section">
            <Helmet title={`Favorites | ${post.frontmatter.title}`} />
            <Container>
                <Title isSize={2}>{post.frontmatter.title}</Title>
                <Content dangerouslySetInnerHTML={{ __html: post.html }} />
            </Container>
        </Section>
    );
}

export const pageQuery = graphql`
    query FavoriteItemByPath($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            fields {
                slug
            }
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
            }
        }
    }
`;
