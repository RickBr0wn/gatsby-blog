module.exports = {
  siteMetadata: {
    title: 'My Personal Blog',
    description: 'A personal blog, written by Rick Brown, powered by gatsby.js',
    author: 'Rick Brown',
    siteUrl: 'https://rickbrown.co.uk/gatsby-blog'
  },
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: { path: 'pages', path: `${__dirname}/src/pages` }
    }
  ]
}
