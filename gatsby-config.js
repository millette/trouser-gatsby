"use strict"

// self
const { name, version } = require("./package.json")

module.exports = {
  siteMetadata: {
    title: `${name} v${version}`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "le-f2",
        path: `${__dirname}/custom/f2/`,
      },
    },
    "gatsby-plugin-no-sourcemaps",
  ],
}
