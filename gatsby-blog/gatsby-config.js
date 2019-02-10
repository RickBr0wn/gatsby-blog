module.exports = {
  siteMetaData: {
    title: 'My Blog',
    description: 'My Personal Blog, powered by Gatsby.js',
  },
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: { path: 'pages', path: `${__dirname}/src/pages` },
    },
  ],
}
