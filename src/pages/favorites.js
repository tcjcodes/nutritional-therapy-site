import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import {
  Card,
  CardContent,
  CardImage,
  Column,
  Columns,
  Container,
  Content,
  Image,
  Section,
  Subtitle,
  Title,
} from 'bloomer'
import { secondaryFont, serifFont, serifFontBold } from '../utils/fonts'
import { colorBrown, colorGreenDark } from '../utils/theme-variables'
import PageHeader from '../components/page-header'

export default function FavoritesTemplate({ data }) {
  const edges = data.allMarkdownRemark.edges
  const { title } = data.site.siteMetadata
  return (
    <Section className="section">
      <Helmet title={`${title} | Favorites`} />

      <Container style={{ padding: '0 1em' }}>
        <PageHeader title="Personal Favorites" />

        <Columns
          style={{ marginTop: '0.5rem' }}
          isMultiline={true}
          isCentered={true}
          isGrid={true}
        >
          {edges.map(({ node }) => (
            <Column
              isSize={{ mobile: 1, tablet: '1/3', desktop: '1/3' }}
              key={node.id}
            >
              <Link to={node.fields.slug}>
                <div
                  css={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '300px',
                    color: colorBrown,
                  }}
                >
                  <div
                    css={{
                      height: '300px',
                      overflowY: 'hidden',
                      background: `url(${
                        node.frontmatter.images[0].image
                      }) center no-repeat`,
                      backgroundSize: 'cover',
                    }}
                  />

                  <div
                    css={{
                      opacity: 0,
                      padding: '1.5em',
                      overflowY: 'hidden',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '100%',
                      background: 'rgba(255,255,255,0.9)',
                      hasTextAlign: 'center',
                      transition: 'opacity 0.3s',
                      '&:hover': {
                        opacity: 1,
                      },
                    }}
                  >
                    <Subtitle
                      isSize={4}
                      style={{
                        ...serifFont,
                        marginBottom: 0,
                      }}
                    >
                      {node.frontmatter.title}
                    </Subtitle>
                    <div
                      css={{
                        width: '1em',
                        margin: '0.5rem 0',
                        borderBottom: `2px solid ${colorBrown}`,
                      }}
                    />
                    <p css={{ fontWeight: 'bold' }}>{node.excerpt}</p>
                  </div>
                </div>
              </Link>
            </Column>
          ))}
        </Columns>
      </Container>
    </Section>
  )
}

export const pageQuery = graphql`
  query FavoritePageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "favorite-item" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
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
`
