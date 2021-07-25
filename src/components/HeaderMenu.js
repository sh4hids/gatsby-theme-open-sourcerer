import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import linkUnderline from '../assets/images/link-underline.svg';

const HeaderMenuWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: calc(100vh - 60px);
  position: fixed;
  top: 60px;
  left: 0;
  background-color: ${({ theme }) =>
    theme.name === 'light' ? theme.colors.bg2 : theme.colors.bg0};
  border-top: 1px solid
    ${({ theme }) =>
      theme.name === 'light' ? theme.colors.bg0 : theme.colors.bg2};
  display: ${({ isMenuOpen }) => (isMenuOpen ? 'block' : 'none')};

  li {
    display: block;
    text-align: center;

    a {
      display: inline-block;
      width: 100%;
      padding: ${({ theme }) => theme.space.lg}px;
      font-size: ${({ theme }) => theme.fontSizes.h5}px;
      color: ${({ theme }) => theme.colors.text1};
      position: relative;
      z-index: 1;
      border-bottom: 1px solid
        ${({ theme }) =>
          theme.name === 'light' ? theme.colors.bg0 : theme.colors.bg2};

      &.active {
        background-color: ${({ theme }) =>
          theme.name === 'light' ? theme.colors.bg0 : theme.colors.bg2};
      }

      &:hover {
        color: ${({ theme }) => theme.colors.primary[0]};
      }
    }
  }

  ${({ theme }) => `${theme.mediaQueries.sm} {
    position: relative;
    top: 0;
    width: auto;
    height: auto;
    border: none;
    display: block;

    li {
      display: inline-block;
      margin-right: ${theme.space.xl}px;
      text-align: left;

      &:last-child {
        margin-right: 0;
      }

      a {
        display: inline;
        padding: 0;
        border: none;

        &.active {
          background: none;

          ::after {
            content: '';
            position: absolute;
            bottom: -0.6rem;
            left: -0.4rem;
            right: -0.4rem;
            height: 0.75rem;
            z-index: -1;
            background-repeat: no-repeat;
            background-image: url(${linkUnderline});
          }
      }
      }
    }
  `};
`;

const HeaderMenu = ({ isMenuOpen }) => (
  <HeaderMenuWrapper isMenuOpen={isMenuOpen}>
    <li>
      <Link to="/about/" activeClassName="active">
        About
      </Link>
    </li>
    <li>
      <Link to="/blog/" activeClassName="active">
        Blog
      </Link>
    </li>
    <li>
      <Link to="/projects/" activeClassName="active">
        Projects
      </Link>
    </li>
    <li>
      <Link to="/uses/" activeClassName="active">
        Uses
      </Link>
    </li>
  </HeaderMenuWrapper>
);

HeaderMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};

export default HeaderMenu;
