/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Box, TagItem, Text } from '../components';
import { DefaultLayout } from '../layouts';

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
  let { group: tags } = data.allMarkdownRemark;

  tags = tags.sort((tagA, tagB) => tagB.totalCount - tagA.totalCount);

  return (
    <DefaultLayout
      title="Tags"
      url={`/${blogPath}/tags/`}
      description="These are some of the topics I have written about so far. Click on each item to read all the posts related to that topic."
    >
      {tags && tags.length ? (
        <Box display="flex" flexWrap="wrap" mx={-3}>
          {tags.map((tag) => (
            <Box p={2} width={[1, 1, 1 / 2]} key={tag.fieldValue}>
              <TagItem tag={tag.fieldValue} totalCount={tag.totalCount} />
            </Box>
          ))}
        </Box>
      ) : (
        <Text>No tag to show!</Text>
      )}
    </DefaultLayout>
  );
};

export default Tags;
