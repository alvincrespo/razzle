const config = { path: `.env.${process.env.NODE_ENV}` }

require("dotenv").config(config)

module.exports = {
  siteMetadata: {
    title: `Razzle - Start your apps right.`,
    description: `Start your next app correctly.`,
    author: `@alvincrespo`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-pg",
      options: {
        connectionString: `postgres://${process.env.PG_USER}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATA}`,
        schema: "public",
        refetchInterval: 60, // Refetch data every 60 seconds
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
