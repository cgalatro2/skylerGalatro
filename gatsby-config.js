var dotenv = require("dotenv");
dotenv.config();

const { spaceId, accessToken, snipcart } = process.env;

module.exports = {
  siteMetadata: {
    title: `Skyler Galatro`,
    description: `Home-Made Art`,
    author: `Skyler Galatro`,
  },
  plugins: [{
      "resolve": "gatsby-source-flotiq",
      "options": {
        "baseUrl": process.env.GATSBY_FLOTIQ_BASE_URL,
        "authToken": process.env.GATSBY_FLOTIQ_API_KEY,
        "forceReload": false,
        "includeTypes": ['product', '_media']
      },
    },
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
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Skyler Galatro`,
        short_name: `Sky`,
        start_url: `/`,
        background_color: `#4DB58E`,
        theme_color: `#4DB58E`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        apiKey: process.env.SNIPCART_API_KEY,
        autopop: true,
      },
    },
  ],
}
