module.exports = {
  siteMetadata: {
    title: 'Caliendo Julien',
    author: 'Caliendo Julien',
    description: 'Développeur, administrateur système, auteur, formateur',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'caliendo-dev',
        short_name: 'caliendodev',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
