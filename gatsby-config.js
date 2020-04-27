module.exports = {
  siteMetadata: {
    title: `-pre-fixes | Web app for cross-browser compatible apps`,
    description: `Use vendor prefixes to make your web app Chrome, Firefox, Opera and Safari compatible.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon@300x.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "VENDOR",
        fieldName: "vendor",
        url:
          "https://api-eu-central-1.graphcms.com/v2/ck9bubr8609f101yy3yt05dsw/master",
      },
    },
  ],
}
