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
import { secondaryFont, serifFontBold } from '../utils/fonts'
import { colorGreenDark } from '../utils/theme-variables'
import PageHeader from '../components/page-header'

export default function FavoritesTemplate({ data }) {
  const edges = data.allMarkdownRemark.edges
  return (
    <Section className="section">
      <Helmet title="Favorites" />

      <Container style={{ padding: '0 1em' }}>
        <PageHeader title="Personal Favorites" />
        <Columns isMultiline={true} isCentered={true} isGrid={true}>
          {edges.map(({ node }) => (
            <Column
              isSize={{ mobile: 1, tablet: '1/3', desktop: '1/4' }}
              key={node.id}
            >
              <Link to={node.fields.slug}>
                <div
                  css={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '300px',
                  }}
                >
                  <div
                    css={{
                      height: '300px',
                      overflowY: 'hidden',
                      background: `url(${node.frontmatter.images[0]
                        .image}) center no-repeat`,
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
                      style={{
                        ...serifFontBold,
                        fontSize: '1.75em',
                        marginBottom: 0,
                        color: colorGreenDark,
                      }}
                    >
                      {node.frontmatter.title}
                    </Subtitle>
                    <div
                      css={{
                        width: '1.5em',
                        margin: '1em 0',
                        borderBottom: `2px solid ${colorGreenDark}`,
                      }}
                    />
                    <p css={{ fontWeight: 'bold' }}>{node.excerpt}</p>
                  </div>
                </div>
              </Link>
              {/*<Card style={{ height: '600px', overflowY: 'hidden', }}>
                            <CardImage
                                style={{
                                    height: '300px',
                                    overflowY: 'hidden',
                                    background: `url(${node.frontmatter.images[0].image}) center no-repeat`,
                                    backgroundSize: 'cover',
                                }}>
                            </CardImage>
                            <CardContent>
                                <Content>
                                    <div css={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                        <div>
                                            <Subtitle
                                                isSize={3}
                                                style={{
                                                    ...secondaryFont,
                                                    marginBottom: '0.25em',
                                                    color: colorGreenDark
                                                }}>{node.frontmatter.title}</Subtitle>
                                        </div>
                                        <div>
                                            <p>{node.excerpt}</p>

                                        </div>
                                        <div>
                                            <Link style={{
                                                ...serifFontBold,
                                            }} to={node.fields.slug}>Read More &#10230;</Link>
                                        </div>

                                    </div>


                                </Content>
                            </CardContent>
                        </Card>*/}
            </Column>
          ))}
        </Columns>
      </Container>
    </Section>
  )
}

export const pageQuery = graphql`
  query FavoritePageQuery {
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
