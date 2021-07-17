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
    siteUrl: `https://${`test.com${basePath}`.replace(/\/\/+/g, '/')}`,
    author: {
      fullName: 'John Doe',
      bio: 'Full-time open sourcerer',
      links: {
        github: 'https://github.com/',
        linkedin: 'https://linkedin.com/',
        twitter: 'https://twitter.com/',
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
