/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import toTitleCase from '../utils/toTitleCase';
import toKebabCase from '../utils/toKebabCase';
import { Text } from '../components';
import DefaultLayout from '../layouts/DefaultLayout';

const Tags = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
      site {
        siteMetadata {
          blogPath
          blogTitle
        }
      }
    }
  `);

  const { blogPath } = data.site.siteMetadata;
  const { group: tags } = data.allMarkdownRemark;

  return (
    <DefaultLayout title="Tags" url={`/${blogPath}/tags/`}>
      {tags && tags.length ? (
        <ul>
          {tags.map((tag) => (
            <li key={tag.fieldValue}>
              <Link to={`/${blogPath}/tags/${toKebabCase(tag.fieldValue)}/`}>
                {toTitleCase(tag.fieldValue)}
              </Link>{' '}
              ({tag.totalCount})
            </li>
          ))}
        </ul>
      ) : (
        <Text>No tag to show!</Text>
      )}
    </DefaultLayout>
  );
};

export default Tags;
