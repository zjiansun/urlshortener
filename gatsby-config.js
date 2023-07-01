module.exports = {
  flags: {
    DEV_SSR: true
  },
  plugins: [
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Json`, // a fixed string
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `links`,
        path: `${__dirname}/src/links`,
      },
    }
  ],
}
