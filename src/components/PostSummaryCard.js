import React from 'react';
import { Link } from 'gatsby';
import urljoin from 'url-join';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Box from './Box';
import Text from './Text';
import PostMeta from './PostMeta';
import ArrowRightIcon from './ArrowRightIcon';

const Wrapper = styled(Box)`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.bg2};
  color: ${({ theme }) => theme.colors.text1};
  box-shadow: ${({ theme }) => theme.elevations[0]};

  :hover {
    transition: all ease-in-out 0.3s;
    box-shadow: ${({ theme }) => theme.elevations[2]};
  }

  a {
    h3 {
      :hover {
        transition: all ease-in-out 0.3s;
        color: ${({ theme }) => theme.colors.primary[1]};
      }
    }
  }

  .read-more-btn {
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.fontWeights.medium};

    a {
      color: ${({ theme }) => theme.colors.text1};

      :hover {
        color: ${({ theme }) => theme.colors.primary[1]};
      }
    }

    span {
      margin-right: ${({ theme }) => theme.space.md}px;
    }
  }
`;

const PostSummaryCard = ({ post, blogPath }) => (
  <Wrapper p={4} mb={4}>
    <Link to={`/${urljoin(blogPath, post.node.fields.slug)}`}>
      <Text variant="h3" color="text1">
        {post.node.frontmatter.title}
      </Text>
    </Link>
    <PostMeta
      postMeta={{
        publishedAt: post.node.frontmatter.publishedAt,
        timeToRead: post.node.timeToRead,
      }}
      textAlign="left"
    />
    <Text>{post.node.excerpt}</Text>
    <Text variant="h5" className="read-more-btn">
      <Link to={`/${urljoin(blogPath, post.node.fields.slug)}`}>
        <span>Read More</span>
        <ArrowRightIcon stroke="primary1" />
      </Link>
    </Text>
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
