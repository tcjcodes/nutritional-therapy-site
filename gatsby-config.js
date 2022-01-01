module.exports = {
    siteMetadata: {
        title: `Willow Grace Wellness`
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                cssLoaderOptions: {
                    camelCase: false,
                    esModule: false,
                    modules: {
                        namedExport: false,
                    },
                }
            }
        },
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`montserrat:500,500i`, 'vollkorn:400,700'],
                display: 'swap'
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages'
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/content`,
                name: 'content'
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/img`,
                name: 'images'
            }
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 600,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-plugin-emotion`,
            options: {
                // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
                // The values for each key in this example are the defaults the plugin uses.
                // sourceMap: true,
                // autoLabel: "dev-only",
                // labelFormat: `[local]`,
                // cssPropOptimization: true,
            },
        },
    ]
};
