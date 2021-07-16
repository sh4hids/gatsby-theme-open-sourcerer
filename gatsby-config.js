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
