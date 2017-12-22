import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { Box, Column, Columns, Container, Heading, Section } from 'bloomer'
import Dotdotdot from 'react-dotdotdot'
import { serifFont } from '../utils/fonts'
import {
    colorBrown,
    colorBrownDark,
    colorGreenDark,
} from '../utils/theme-variables'
import PageHeader from '../components/page-header'


const CategoriesTemplate = ({ data }) => {
    const edges = data.allMarkdownRemark.edges
    const { title } = data.site.siteMetadata
    return (
        <Section className="section">
            <Helmet title={`${title} | Categories`} />

            <Container isFluid={true} style={{ padding: '0 1em' }}>
                <PageHeader center title="Categories" />
                <Columns
                    style={{ marginTop: '0.5rem' }}
                    isMultiline={true}
                    isCentered={true}
                    isGrid={true}
                >
                    {edges.map(({ node }) => (
                        <pre
                            css={{}}
                            key={node.id}
                        >
                            { JSON.stringify(node) }
                            {/*<ProductCard
                                slug={node.fields.slug}
                                thumbnail={node.frontmatter.images[0].image}
                                title={node.frontmatter.title}
                                excerpt={node.excerpt}
                            />*/}
                        </pre>
                    ))}
                </Columns>
            </Container>
        </Section>
    )
}

export const pageQuery = graphql`
    query ProductCategoriesPageQuery {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "product-category" } } }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        name
                        description
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`

export default CategoriesTemplate
