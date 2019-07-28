require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Michael Scott`,
    description: `A gallery for Michael's thoughts`,
    author: `@jakepartusch`,
  },
  plugins: [
    {
      resolve: "@jakepartusch/gatsby-theme-contentful-gallery",
      options: {
        contentfulSpaceId: `rqyv46biy77t`,
        contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Michael Scott`,
        short_name: `Michael`,
        start_url: `/`,
        background_color: `#eee`,
        theme_color: `#eee`,
        display: `standalone`,
        icon: `src/images/the-office.jpg`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
