/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

const PostMeta = ({ postMeta, ...others }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          urlDateFormat
        }
      }
    }
  `);

  const { displayDateFormat = 'MMMM dd, yyyy' } = data.site.siteMetadata || {};

  return (
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
          <Text>
            {format(new Date(postMeta.publishedAt), displayDateFormat)}
          </Text>
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
};

PostMeta.propTypes = {
  postMeta: PropTypes.shape({
    author: PropTypes.string,
    publishedAt: PropTypes.string,
    timeToRead: PropTypes.number,
  }).isRequired,
};

export default PostMeta;
