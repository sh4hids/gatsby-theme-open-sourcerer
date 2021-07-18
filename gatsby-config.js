const urljoin = require('url-join');

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
    title: 'Gatsby Theme Open Sourcerer',
    description:
      'Aliquip Lorem eiusmod culpa ex tempor sunt esse dolor ea ex non amet.',
    siteUrl: urljoin('https://example.com', basePath),
    author: {
      fullName: 'John Doe',
      bio: 'Full-time open sourcerer',
      links: {
        github: 'https://github.com/',
        linkedin: 'https://linkedin.com/',
        twitter: 'https://twitter.com/',
        facebook: 'https://facebook.com/',
        instagram: 'https://instagram.com/',
      },
    },
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
