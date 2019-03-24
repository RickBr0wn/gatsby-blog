const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Rick Brown',
    description: 'A personal blog, powered by gatsby.js',
    author: 'Rick Brown',
    siteUrl: 'https://rickbrown.co.uk/gatsby-blog'
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      name: 'pages',
      options: { path: 'pages', path: `${__dirname}/src/pages` }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { path: path.join(__dirname, 'src', 'images') }
    }
  ]
}
