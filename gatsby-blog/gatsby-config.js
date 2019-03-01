module.exports = {
  siteMetadata: {
    title: 'Rick Brown',
    description: 'A personal blog, powered by gatsby.js',
    author: 'Rick Brown',
    siteUrl: 'https://rickbrown.co.uk/gatsby-blog'
  },
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: { path: 'pages', path: `${__dirname}/src/pages` }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { path: 'images', path: `${__dirname}/src/images` }
    }
  ]
}
