const urljoin = require('url-join');
const config = require('./src/config');

// module.exports = {
//   plugins: [
//     `gatsby-plugin-styled-components`,
//     {
//       resolve: 'gatsby-source-filesystem',
//       options: {
//         path: 'contents',
//       },
//     },
//     {
//       resolve: 'gatsby-transformer-yaml',
//       options: {
//         typeName: 'YamlPage',
//       },
//     },
//   ],
// };
module.exports = ({ contentPath = 'contents', basePath = '/' }) => ({
  siteMetadata: {
    ...config,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: contentPath,
      },
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'YamlPage',
      },
    },
  ],
});
