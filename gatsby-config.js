module.exports = options => {
  return {
    siteMetadata: {
      title: `Default Gallery Title`,
      description: `A personal gallery`,
      author: `@jakepartusch`
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: options.contentfulSpaceId,
          accessToken: options.contentfulAccessToken
        }
      },
      `gatsby-transformer-sharp`,
      `gatsby-transformer-remark`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-emotion`,
      `gatsby-plugin-theme-ui`
    ]
  };
};
