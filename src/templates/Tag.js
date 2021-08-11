/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';

import toKebabCase from '../utils/toKebabCase';
import toTitleCase from '../utils/toTitleCase';
import { Text, PostSummaryCard } from '../components';
import DefaultLayout from '../layouts/DefaultLayout';

const Tag = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const { blogPath } = data.site.siteMetadata;

  return (
    <DefaultLayout
      title={toTitleCase(pageContext.tag)}
      url={`/${blogPath}/tags/${toKebabCase(pageContext.tag)}/`}
      description={`Following are the latest posts related to the topic ${pageContext.tag.toUpperCase()}.`}
    >
      {posts.length ? (
        posts.map((post) => (
          <PostSummaryCard post={post} blogPath={blogPath} key={post.node.id} />
        ))
      ) : (
        <Text>No post to show!</Text>
      )}
    </DefaultLayout>
  );
};

export const pageQuery = graphql`
  query ($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___publishedAt], order: DESC }
      filter: {
        frontmatter: { isPublished: { eq: true }, tags: { in: [$tag] } }
      }
    ) {
      totalCount
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

export default Tag;
