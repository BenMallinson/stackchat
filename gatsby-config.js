module.exports = {
  siteMetadata: {
    title: `Stackchat`,
    description: `Stackchat - Monthly Web Development Meetup`,
    author: `@mallinsonben`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `stackchat-website`,
        short_name: `stackchat`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        purgeOnly: ['src/css/style.css'],
      },
    },
  ],
}
