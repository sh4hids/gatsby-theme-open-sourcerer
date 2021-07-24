const fs = require('fs');
const urljoin = require('url-join');

exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || 'contents';

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

exports.createSchemaCustomization = ({ actions: { createTypes }, schema }) => {
  const typeDefs = [
    `type YamlPage implements Node @dontinfer {
      id: ID!
      title: String!
      metaDescription: String!
      pageType: String!
      contents: [Content]
    }`,
    schema.buildObjectType({
      name: 'Project',
      fields: {
        name: 'String',
        type: 'String',
        description: 'String',
        url: 'String',
        totalStars: 'Int',
      },
    }),
    schema.buildObjectType({
      name: 'Uses',
      fields: {
        name: 'String',
        type: 'String',
        items: ['String'],
      },
    }),
    schema.buildUnionType({
      name: 'Content',
      types: ['Project', 'Uses'],
      resolveType(value) {
        if (value.type === 'Project') {
          return 'Project';
        }
        if (value.type === 'Uses') {
          return 'Uses';
        }
        throw new Error('No template defined');
      },
    }),
  ];
  createTypes(typeDefs);
};

exports.createPages = async ({ actions }, options) => {
  const basePath = options.basePath || '/';

  actions.createPage({
    path: urljoin(basePath, '/projects/'),
    component: require.resolve('./src/pages/Projects.js'),
  });

  actions.createPage({
    path: urljoin(basePath, '/uses/'),
    component: require.resolve('./src/pages/Uses.js'),
  });
};
