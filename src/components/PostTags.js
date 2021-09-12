/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import toKebabCase from '../utils/toKebabCase';
import toTitleCase from '../utils/toTitleCase';
import HashIcon from './HashIcon';

const TagListWrapper = styled.ul`
  margin: ${({ theme }) => theme.space.xxl}px 0 -16px 0;
  padding: 0;
  text-align: center;

  li {
    margin: 0 ${({ theme }) => theme.space.lg}px
      ${({ theme }) => theme.space.lg}px 0;
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSizes.body};
    background-color: var(--color-text-0);
    border-radius: 8px;
    padding: 0 8px;
    transition: all ease-in-out 0.3s;
    opacity: 0.8;

    :hover {
      opacity: 1;
      background-color: var(--color-primary-1);
    }

    ::before {
      content: '';
      margin-right: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    svg {
      position: relative;
      top: -2px;
      margin-left: -5px;
      stroke: var(--color-bg-1);
    }

    a {
      color: var(--color-bg-1);
    }
  }
`;

const PostTags = ({ tags = [], blogPath = '' }) => (
  <TagListWrapper>
    {tags.map((item) => (
      <li key={item}>
        <Link to={`/${blogPath}/tags/${toKebabCase(item)}/`}>
          <HashIcon size={20} />
          {toTitleCase(item).replace(/\s/g, '')}
        </Link>
      </li>
    ))}
  </TagListWrapper>
);

PostTags.defaultProps = {
  tags: [],
  blogPath: '',
};

PostTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  blogPath: PropTypes.string,
};

export default PostTags;
