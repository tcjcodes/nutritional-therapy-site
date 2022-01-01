// FIXME: remove path? https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#using-fs-in-ssr
const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` });
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });

        const { category, templateKey, name } = node.frontmatter;
        if (category || templateKey === 'product-category') {
            const categoryKey = (category || name)
                .trim()
                .replace(/\s/g, '-')
                .toLowerCase();
            createNodeField({
                node,
                name: 'categoryKey',
                value: categoryKey,
            });
        }
    }
};

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___title] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            html
            id
            fields {
              slug
              categoryKey
            }
            frontmatter {
              templateKey
              path
              title
              name
              description
              category
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
            createPage({
                path: node.fields.slug,
                component: path.resolve(
                    `src/templates/${String(node.frontmatter.templateKey)}.js`
                ),
                context: {
                    slug: node.fields.slug,
                    categoryKey: node.fields.categoryKey,
                    templateKey: node.frontmatter.templateKey,
                }, // additional data can be passed via context
            });
        });
    });
};

// exports.onCreateWebpackConfig = ({ actions }) => {
//     actions.setWebpackConfig({
//         node: {
//             fs: 'empty',
//             path: 'mock',
//         },
//         resolve: {
//             alias: {
//                 path: require.resolve('path-browserify')
//             },
//             fallback: {
//                 fs: false,
//             }
//         }
//     });
// };
