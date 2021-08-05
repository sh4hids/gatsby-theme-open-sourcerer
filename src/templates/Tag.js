/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, Link } from 'gatsby';

import toTitleCase from '../utils/toTitleCase';
import toKebabCase from '../utils/toKebabCase';
import { Text } from '../components';
import DefaultLayout from '../layouts/DefaultLayout';

const Tag = (props) => {
  console.log(props);

  return (
    <DefaultLayout>
      <Text>No tag to show!</Text>
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
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`;

export default Tag;
