if (process.env.GATSBY_NODE_VERSION) {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}.gatsby_node_version`,
  })
} else {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
}

module.exports = {
  siteMetadata: {
    title: `d3g0zz`,
    siteUrl: `https://www.d3g0zz.com`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "1234567",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto Mono`,
          `source sans pro\:300,400,600,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
};
