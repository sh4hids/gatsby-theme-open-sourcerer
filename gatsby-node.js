const fs = require('fs');
const path = require('path');
const urljoin = require('url-join');
const { format, isBefore } = require('date-fns');
const { paginate } = require('gatsby-awesome-pagination');

const toKebabCase = require('./src/utils/toKebabCase');

const postNodes = [];

function addSiblingNodes(createNodeField) {
  postNodes.sort(
    (
      { frontmatter: { publishedAt: date1 } },
      { frontmatter: { publishedAt: date2 } }
    ) => {
      const dateA = new Date(date1);
      const dateB = new Date(date2);

      if (isBefore(dateA, dateB)) return 1;

      if (isBefore(dateB, dateA)) return -1;

      return 0;
    }
  );
  for (let i = 0; i < postNodes.length; i += 1) {
    const nextID = i + 1 < postNodes.length ? i + 1 : 0;
    const prevID = i - 1 >= 0 ? i - 1 : postNodes.length - 1;
    const currNode = postNodes[i];
    const nextNode = postNodes[nextID];
    const prevNode = postNodes[prevID];
    createNodeField({
      node: currNode,
      name: 'nextTitle',
      value: nextNode.frontmatter.title,
    });
    createNodeField({
      node: currNode,
      name: 'nextSlug',
      value: nextNode.fields.slug,
    });
    createNodeField({
      node: currNode,
      name: 'prevTitle',
      value: prevNode.frontmatter.title,
    });
    createNodeField({
      node: currNode,
      name: 'prevSlug',
      value: prevNode.fields.slug,
    });
  }
}

exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || 'contents';

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }

  if (!fs.existsSync(`${contentPath}/blog`)) {
    reporter.info(`creating the blog directory`);
    fs.mkdirSync(`${contentPath}/blog`);
  }
};

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);

    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${toKebabCase(node.frontmatter.title)}`;
    } else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === '') {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    if (Object.prototype.hasOwnProperty.call(node, 'frontmatter')) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug'))
        slug = `/${toKebabCase(node.frontmatter.slug)}`;
    }

    const date = format(new Date(node.frontmatter.publishedAt), 'yyyy/MM/dd');
    slug = `/${date}${slug}/`;
    createNodeField({ node, name: 'slug', value: slug });
    postNodes.push(node);
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
        githubRepo: 'String',
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

exports.setFieldsOnGraphQLNodeType = ({ type, actions }) => {
  const { name } = type;
  const { createNodeField } = actions;
  if (name === 'MarkdownRemark') {
    addSiblingNodes(createNodeField);
  }
};

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || '/';

  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { isPublished: { eq: true } } }
      ) {
        edges {
          node {
            frontmatter {
              tags
              title
            }
            fields {
              slug
            }
          }
        }
      }
      site(siteMetadata: {}) {
        siteMetadata {
          blogPath
          postPerPage
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('error loading posts', result.errors);
    return;
  }

  const tagSet = new Set();
  const posts = result.data.allMarkdownRemark.edges;
  const { blogPath = 'blog', postPerPage = 8 } = result.data.site.siteMetadata;

  posts.forEach((edge, index) => {
    if (edge.node.frontmatter.tags) {
      edge.node.frontmatter.tags.forEach((tag) => {
        tagSet.add(tag);
      });
    }

    actions.createPage({
      path: `/${blogPath}${edge.node.fields.slug}`,
      component: require.resolve('./src/templates/Post.js'),
      context: {
        slug: edge.node.fields.slug,
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    });

    const tagList = Array.from(tagSet);
    tagList.forEach((tag) => {
      actions.createPage({
        path: `/${blogPath}/tags/${toKebabCase(tag)}/`,
        component: require.resolve('./src/templates/Tag.js'),
        context: {
          tag,
        },
      });
    });
  });

  paginate({
    createPage: actions.createPage,
    items: posts,
    itemsPerPage: postPerPage,
    pathPrefix: ({ pageNumber }) =>
      pageNumber === 0 ? `/${blogPath}/` : `/${blogPath}`,
    component: require.resolve('./src/templates/Posts.js'),
  });

  actions.createPage({
    path: urljoin(basePath, '/about/'),
    component: require.resolve('./src/templates/About.js'),
  });

  actions.createPage({
    path: urljoin(basePath, '/projects/'),
    component: require.resolve('./src/templates/Projects.js'),
  });

  actions.createPage({
    path: urljoin(basePath, '/uses/'),
    component: require.resolve('./src/templates/Uses.js'),
  });

  actions.createPage({
    path: urljoin(basePath, '/contact/'),
    component: require.resolve('./src/templates/Contact.js'),
  });
  actions.createPage({
    path: urljoin(basePath, `/${blogPath}/tags/`),
    component: require.resolve('./src/templates/Tags.js'),
  });
};
