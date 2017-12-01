const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators
    if (node.internal.type === `MarkdownRemark` && node.frontmatter.templateKey === 'favorites') {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        console.log('created slug for path', slug);
        createNodeField({
            node,
            name: `path`,
            value: slug,
        })
    }
}

exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators;

    return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            excerpt(pruneLength: 400)
            html
            id
            frontmatter {
              templateKey
              path
              date
              title
            }
          }
        }
      }
    }
  `).then(result => {
        if (result.errors) {
            result.errors.forEach(e => console.error(e.toString()));
            return Promise.reject(result.errors);
        }
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            console.log(node);
            createPage({
                path: node.frontmatter.path,
                component: path.resolve(`src/templates/${String(node.frontmatter.templateKey)}.js`),
                context: {
                    templateKey: node.frontmatter.templateKey
                } // additional data can be passed via context
            });
        });
    });
};
