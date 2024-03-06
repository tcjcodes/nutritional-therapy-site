import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
      query SiteMetadataQuery {
          site {
              siteMetadata {
                  title
                  description
                  siteUrl
              }
          }
      }
  `)

  return data.site.siteMetadata
}
