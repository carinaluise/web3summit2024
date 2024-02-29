/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Web3 Summit 2024: Leading the Charge in Blockchain Evolution - Connect, Innovate, Transform`,
    siteUrl: `https://web3summit.com`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-simple-analytics",
      options: {
        domain: "apisa.web3.foundation",
        eventsGlobal: "sa",
        events: true,
        trackPageViews: true,
      },
    },
  ],
};
