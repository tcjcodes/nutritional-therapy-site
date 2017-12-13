import React from 'react'
import Helmet from 'react-helmet'

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <section className="section">
      <Helmet title={`Blog | ${post.frontmatter.title}`} />
      <div className="container content">
        <h1 className="title is-size-2 has-text-info is-bold-light">
          {post.frontmatter.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </section>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
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
`
