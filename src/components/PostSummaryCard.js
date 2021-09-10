import React from 'react';
import { Link } from 'gatsby';
import urljoin from 'url-join';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from './Text';
import PostMeta from './PostMeta';

const Wrapper = styled(Link)`
  display: block;
  border-radius: 8px;
  background-color: var(--color-bg-1);
  color: var(--color-text-0);
  box-shadow: ${({ theme }) => theme.elevations[0]};
  padding: ${({ theme }) => theme.space.xl}px;
  margin-bottom: ${({ theme }) => theme.space.xl}px;

  :hover {
    color: var(--color-text-0);
    transition: all ease-in-out 0.3s;
    box-shadow: ${({ theme }) => theme.elevations[2]};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  h3 {
    :hover {
      transition: all ease-in-out 0.3s;
      color: var(--color-primary-1);
    }
  }

  p {
    margin-bottom: 0;
  }
`;

const PostSummaryCard = ({ post, blogPath }) => (
  <Wrapper
    to={`/${urljoin(blogPath, post.node.fields.slug)}`}
    aria-label={post.node.frontmatter.title}
  >
    <Text variant="h3" color="text1">
      {post.node.frontmatter.title}
    </Text>
    <PostMeta
      postMeta={{
        publishedAt: post.node.frontmatter.publishedAt,
        timeToRead: post.node.timeToRead,
      }}
      textAlign="left"
    />
    <Text>{post.node.excerpt}</Text>
  </Wrapper>
);

PostSummaryCard.defaultProps = {
  blogPath: '',
  post: {
    node: {},
  },
};

PostSummaryCard.propTypes = {
  blogPath: PropTypes.string,
  post: PropTypes.shape({
    node: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        publishedAt: PropTypes.string,
      }),
      fields: PropTypes.shape({
        slug: PropTypes.string,
      }),
      excerpt: PropTypes.string,
      timeToRead: PropTypes.number,
    }),
  }),
};

export default PostSummaryCard;
