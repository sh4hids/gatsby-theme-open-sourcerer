/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import toKebabCase from '../utils/toKebabCase';
import toTitleCase from '../utils/toTitleCase';
import HashIcon from './HashIcon';

const TagListWrapper = styled.ul`
  margin: ${({ theme }) => theme.space.xl}px 0 -16px 0;
  padding: 0;
  text-align: center;

  li {
    margin-right: ${({ theme }) => theme.space.lg}px;
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSizes.body}px;
    background-color: ${({ theme }) =>
      theme.name === 'light' ? theme.colors.dark[0] : theme.colors.light[0]};
    border-radius: 8px;
    padding: 0 8px;
    transition: all ease-in-out 0.3s;
    opacity: 0.8;

    :hover {
      opacity: 1;
      background-color: ${({ theme }) => theme.colors.primary1};
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
      stroke: ${({ theme }) =>
        theme.name === 'light' ? theme.colors.light[1] : theme.colors.dark[1]};
    }

    a {
      color: ${({ theme }) =>
        theme.name === 'light' ? theme.colors.light[1] : theme.colors.dark[1]};
    }
  }
`;

const PostTags = ({ tags = [], blogPath = '' }) => (
  <TagListWrapper>
    {tags.map((item) => (
      <li key={item}>
        <Link to={`/${blogPath}/tags/${toKebabCase(item)}/`}>
          <HashIcon size={20} />
          {toTitleCase(item)}
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
