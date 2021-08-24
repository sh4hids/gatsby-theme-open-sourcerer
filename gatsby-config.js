const config = require('./src/config');

module.exports = (options = {}) => ({
  siteMetadata: {
    ...config,
    ...options,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: options.contentPath || config.contentPath,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${options.contentPath || config.contentPath}/blog/`,
      },
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'YamlPage',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: { sh: 'bash', js: 'javascript' },
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [],
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
              escapeEntities: {},
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: `<svg version="1.1" x="0px" y="0px" viewBox="0 0 162.656 162.656" xml:space="preserve" width="0.6em" height="0.6em" fill="#21AAE2" stroke="#21AAE2" stroke-width="0"><path d="M151.764,10.894c-14.522-14.522-38.152-14.525-52.676-0.008l0.003,0.003L76.112,33.872l10.607,10.605l22.983-22.988 l-0.002-0.002c8.678-8.663,22.785-8.658,31.457,0.014c8.673,8.672,8.672,22.786,0,31.461l-34.486,34.484 c-4.201,4.202-9.787,6.516-15.729,6.516c-5.942,0-11.529-2.314-15.73-6.516L64.605,98.052c7.035,7.035,16.389,10.91,26.338,10.91 c9.949,0,19.303-3.875,26.335-10.91l34.487-34.484C166.284,49.043,166.284,25.413,151.764,10.894z"></path> <path d="M52.96,141.162L52.96,141.162c-8.675,8.67-22.788,8.668-31.461-0.005c-8.673-8.675-8.673-22.791-0.001-31.465L55.98,75.21 c8.675-8.674,22.789-8.674,31.462,0L98.05,64.604c-14.524-14.523-38.154-14.524-52.676,0L10.89,99.086 c-14.519,14.523-14.519,38.154,0.001,52.678c7.263,7.262,16.801,10.893,26.341,10.892c9.536,0,19.074-3.629,26.333-10.887 l0.002-0.001l22.984-22.99l-10.608-10.606L52.96,141.162z"></path> </svg>`,
              className: `header-anchor-icon`,
              enableCustomId: true,
            },
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: options.title || config.title,
        short_name: options.shortTitle || config.shortTitle,
        start_url: `/`,
        icon: options.manifest ? options.manifest.icon : config.manifest.icon,
        background_color: options.manifest
          ? options.manifest.backgroundColor
          : config.manifest.backgroundColor,
        theme_color: options.manifest
          ? options.manifest.themeColor
          : config.manifest.themeColor,
        display: `standalone`,
      },
    },
  ],
});
