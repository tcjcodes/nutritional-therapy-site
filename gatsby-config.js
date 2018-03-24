module.exports = {
    siteMetadata: {
        title: `Healing Essence & Wellness`,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        `gatsby-plugin-sass`,
        'gatsby-plugin-glamor',
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `montserrat:300`,
                    'vollkorn:400,700',
                ]
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
                plugins: []
            }
        },
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
        }
    ]
};
