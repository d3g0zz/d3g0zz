/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `d3g0zz`,
    siteUrl: `https://www.d3g0zz.com`
  },
  plugins: [{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "1234567"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};