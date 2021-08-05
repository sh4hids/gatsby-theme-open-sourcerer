/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';

import { Text, Paginate, PostSummaryCard } from '../components';
import DefaultLayout from '../layouts/DefaultLayout';

const Posts = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const { blogPath, blogTitle } = data.site.siteMetadata;

  return (
    <DefaultLayout
      title={blogTitle || 'Blog'}
      url={
        pageContext.humanPageNumber > 1
          ? `/blog/${pageContext.humanPageNumber}/`
          : `/blog/`
      }
    >
      {posts.length ? (
        posts.map((post) => (
          <PostSummaryCard post={post} blogPath={blogPath} key={post.node.id} />
        ))
      ) : (
        <Text>No post to show!</Text>
      )}
      <Paginate pageContext={pageContext} />
    </DefaultLayout>
  );
};

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___publishedAt], order: DESC }
      skip: $skip
      limit: $limit
      filter: { frontmatter: { isPublished: { eq: true } } }
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
        blogTitle
      }
    }
  }
`;

export default Posts;
