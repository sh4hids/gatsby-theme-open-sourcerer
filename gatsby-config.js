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
      links: [
        {
          site: 'facebook',
          url: 'https://facebook.com/',
        },
        {
          site: 'github',
          url: 'https://github.com/',
        },
        {
          site: 'instagram',
          url: 'https://instagram.com/',
        },
        {
          site: 'linkedin',
          url: 'https://linkedin.com/',
        },
        {
          site: 'twitter',
          url: 'https://twitter.com/',
        },
      ],
    },
    footer: {
      title: 'Words of Thanks',
      description:
        'Sunt adipisicing culpa deserunt est est excepteur voluptate occaecat voluptate irure elit sit nostrud culpa. Deserunt est est excepteur voluptate occaecat voluptate irure elit sit',
      copyright: `© ${new Date().getFullYear()} John Doe. All Rights Reserved.`,
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
