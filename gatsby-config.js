const nodeSass = require('node-sass');

module.exports = {
  siteMetadata: {
    title: `Legal Pracmatic, LLC`,
    url: `https://www.legalpracmatic.com/`,
    description: `Providing translations and legal services with a human touch, 
    in a practical and simple way, aided by technology for a prompt response to our clients.`,
    author: `@littlebitcreative`,
    keywords: `translations, notary public, preparacion de documentos, conciliación, traducciones`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-image`,
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
        name: `Legal Pracmatic, LLC`,
        short_name: `legalpracmatic`,
        description: `Providing translations and legal services with a human touch, 
        in a practical and simple way, aided by technology for a prompt response to our clients.`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#252D40`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/layout.component.jsx`),
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: nodeSass,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Open Sans:400,600', 'Open Sans Condensed:300'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        defaultCrumb: {
          // location: required and must include the pathname property
          location: {
            pathname: '/',
          },
          // crumbLabel: require label for the default crumb
          crumbLabel: 'Home',
          crumbSeparator: '/',
        },
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `es`],
        defaultLanguage: `en`,
        redirect: false,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
