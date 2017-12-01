import React from 'react';
import PropTypes from 'prop-types'
import Link from 'gatsby-link';

const BlogTemplate = ({ posts }) => <div className="container">
  {posts.filter(post => post.node.frontmatter.templateKey === 'blog-post')
    .map(({ node: post }) => {
      return (
        <section key={post.id} className="section">
          <div className="content" style={{ border: '1px solid #eaecee', padding: '2em 4em' }} key={post.id}>

            <p>
              <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              <span> &bull; </span>
              <small>{post.frontmatter.date}</small>
            </p>
            <p>
              {post.excerpt}
              <br/>
              <br/>
              <Link className="button is-info is-small" to={post.frontmatter.path}>
                Keep Reading
              </Link>
            </p>
          </div>
        </section>
      );
    })}
</div>

BlogTemplate.PropTypes = {
    posts: PropTypes.object.isRequired
}

export default BlogTemplate;