/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { format } from 'date-fns';

import Text from './Text';
import Box from './Box';
import ClockIcon from './ClockIcon';
import CalendarIcon from './CalendarIcon';
import UserIcon from './UserIcon';

const PostMetaContainer = styled(Box)`
  margin-top: ${({ theme }) => theme.space.lg}px;

  p {
    display: inline-block;
    margin: 0 ${({ theme }) => theme.space.lg}px 0 0;
  }

  svg {
    position: relative;
    top: -2px;
    margin-right: ${({ theme }) => theme.space.sm}px;
  }

  .post-meta-author {
    display: block;
  }
`;

const PostMeta = ({ postMeta, ...others }) => (
  <PostMetaContainer textAlign={['center', 'center', 'left']} {...others}>
    {postMeta.author && (
      <span className="post-meta-item post-meta-author">
        <UserIcon size={16} />
        <Text>
          <Link to="/about/">{postMeta.author}</Link>
        </Text>
      </span>
    )}

    {postMeta.publishedAt && (
      <span className="post-meta-item">
        <CalendarIcon size={16} />
        <Text>{format(new Date(postMeta.publishedAt), 'MMMM dd , yyyy')}</Text>
      </span>
    )}

    {postMeta.timeToRead && (
      <span className="post-meta-item">
        <ClockIcon size={16} />
        <Text>{postMeta.timeToRead} min read</Text>
      </span>
    )}
  </PostMetaContainer>
);

export default PostMeta;
