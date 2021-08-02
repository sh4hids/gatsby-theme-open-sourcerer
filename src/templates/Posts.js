/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, Link } from 'gatsby';
import urljoin from 'url-join';

import { Text } from '../components';
import DefaultLayout from '../layouts/DefaultLayout';

const Post = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const { blogPath } = data.site.siteMetadata;

  console.log(urljoin(blogPath, posts[0].node.fields.slug));

  return (
    <DefaultLayout title="Blog" url="/blog/">
      {posts.map((post) => (
        <Text key={post.node.id}>
          <Link to={`/${urljoin(blogPath, post.node.fields.slug)}`}>
            {post.node.frontmatter.title}
          </Link>
        </Text>
      ))}
    </DefaultLayout>
  );
};

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___publishedAt], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            publishedAt
          }
        }
      }
    }
    site {
      siteMetadata {
        blogPath
      }
    }
  }
`;

export default Post;
