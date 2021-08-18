/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery, Link } from 'gatsby';

import toTitleCase from '../utils/toTitleCase';
import toKebabCase from '../utils/toKebabCase';
import Box from './Box';
import HashIcon from './HashIcon';

const TagWrapper = styled(Box)`
  a {
    width: 100%;
    display: inline-block;
    text-align: center;
    padding: ${({ theme }) => theme.space.lg}px 0;
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSizes.body}px;
    background-color: ${({ theme }) => theme.colors.bg2};
    color: ${({ theme }) => theme.colors.text1};
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.elevations[0]};
    transition: all ease-in-out 0.3s;

    svg {
      position: relative;
      top: -2px;
    }

    .tag-post-count {
      margin-left: ${({ theme }) => theme.space.md}px;
    }

    :hover {
      color: ${({ theme }) => theme.colors.text1};
      background-color: ${({ theme }) => theme.colors.primary1};
      box-shadow: ${({ theme }) => theme.elevations[2]};
    }
  }
`;

const TagItem = ({ tag = '', totalCount = 0, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          blogPath
        }
      }
    }
  `);

  const { blogPath } = data.site.siteMetadata;

  return (
    <TagWrapper {...props}>
      <Link to={`/${blogPath}/tags/${toKebabCase(tag)}/`}>
        <HashIcon size={20} />
        <span>{toTitleCase(tag).replace(/\s/g, '')}</span>
        <span className="tag-post-count">{`(${totalCount})`}</span>
      </Link>
    </TagWrapper>
  );
};

TagItem.defaultProps = {
  totalCount: 0,
};

TagItem.propTypes = {
  tag: PropTypes.string.isRequired,
  totalCount: PropTypes.number,
};

export default TagItem;
