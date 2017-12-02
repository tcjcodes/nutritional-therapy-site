import React from 'react';
import Helmet from 'react-helmet';
import { Breadcrumb, BreadcrumbItem, Button, Column, Columns, Container, Content, Image, Section, Title } from 'bloomer'
import Link, { withPrefix } from 'gatsby-link'
import { secondaryFont } from '../utils/fonts'

export default function FavoriteItemTemplate({ data }) {
    const { markdownRemark: post } = data;
    return (
        <Section className="section">
            <Helmet title={`Favorites | ${post.frontmatter.title}`} />
            <Container>
                <Columns isCentered={true}>
                    <Column isSize={5} style={{ paddingRight: '3em' }}>
                        <Breadcrumb>
                            <ul>
                                <BreadcrumbItem><Link to='/favorites/'>Favorites</Link></BreadcrumbItem>
                                <BreadcrumbItem isActive><Link>{post.frontmatter.title}</Link></BreadcrumbItem>
                            </ul>
                        </Breadcrumb>

                        {post.frontmatter.images.map((t, index) => (<div key={t.image}>
                            <Image src={__PATH_PREFIX__ + t.image} alt={post.frontmatter.title + ' ' + (index + 1)} />
                        </div>))}
                    </Column>
                    <Column isSize={6}>
                        <Title style={{ ...secondaryFont, letterSpacing: '2px', }}
                               isSize={2}
                               hasTextColor='dark'>{post.frontmatter.title}</Title>
                        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
                        <Button isColor='primary' isOutlined={true} href={post.link}>Buy Item</Button>
                    </Column>
                </Columns>
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
