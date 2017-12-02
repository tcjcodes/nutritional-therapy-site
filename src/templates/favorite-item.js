import React from 'react';
import Helmet from 'react-helmet';
import { Container, Content, Image, Section, Title } from 'bloomer'
import { withPrefix } from 'gatsby-link'

export default function FavoriteItemTemplate({ data }) {
    const { markdownRemark: post } = data;
    return (
        <Section className="section">
            <Helmet title={`Favorites | ${post.frontmatter.title}`} />
            <Container>
                <Title isSize={2}>{post.frontmatter.title}</Title>
                <Content dangerouslySetInnerHTML={{ __html: post.html }} />
                {post.frontmatter.images.map((t, index) => (<div key={t.image}>
                    <Image src={__PATH_PREFIX__ + t.image} alt={post.frontmatter.title + ' ' + (index + 1)} />
                </div>))}
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
                images {
                    image
                }
            }
        }
    }
`;
