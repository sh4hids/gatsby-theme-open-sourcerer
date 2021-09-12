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
  background-color: var(--color-bg-1);
  color: var(--color-text-0);
  border-top: 1px solid var(--color-bg-0);
  display: ${({ isMenuOpen }) => (isMenuOpen ? 'block' : 'none')};

  li {
    display: block;
    text-align: center;

    ::before {
      content: '';
      margin-right: 0;
    }

    a {
      display: inline-block;
      width: 100%;
      padding: ${({ theme }) => theme.space.lg}px;
      font-size: ${({ theme }) => theme.fontSizes.h6};
      font-weight: ${({ theme }) => theme.fontWeights.medium};
      color: var(--color-text-1);
      position: relative;
      z-index: 1;
      border-bottom: 1px solid var(--color-bg-0);

      &.active {
        background-color: var(--color-bg-2);
      }

      &:hover {
        color: var(--color-primary-0);
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
      <Link to="/blog/" activeClassName="active" partiallyActive>
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
    <li>
      <Link to="/contact/" activeClassName="active">
        Contact
      </Link>
    </li>
  </HeaderMenuWrapper>
);

HeaderMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};

export default HeaderMenu;
