module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    /*
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'le-f5',
        path: `${__dirname}/custom/f5/`
      },
    },
    */
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'le-f2',
        path: `${__dirname}/custom/f2/`
      },
    }
  ]
}
