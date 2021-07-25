import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Container from './Container';
import Box from './Box';
import BrandLogo from './BrandLogo';
import HeaderMenu from './HeaderMenu';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';
import MenuIcon from './MenuIcon';

const Wrapper = styled.div`
  height: 60px;
  background-color: ${({ theme }) =>
    theme.name === 'light' ? theme.colors.bg2 : theme.colors.bg0};
  position: fixed;
  width: 100%;
  z-index: 999;
`;

const HeaderContainer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  .theme-toggle-btn,
  .menu-toggle-btn {
    cursor: pointer;
    margin-left: ${({ theme }) => theme.space.xl}px;

    svg {
      position: relative;
      top: 2px;
    }
  }

  .menu-toggle-btn {
    ${({ theme }) => `${theme.mediaQueries.sm} {
      display: none;
    }`};
  }
`;

const Header = ({ theme, changeTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Wrapper>
      <HeaderContainer p={3}>
        <BrandLogo href="/">MySite</BrandLogo>
        <Box display="flex">
          <HeaderMenu isMenuOpen={isMenuOpen} />
          <span
            onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}
            onKeyDown={() => {}}
            role="button"
            tabIndex="0"
            className="theme-toggle-btn"
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </span>
          <span
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onKeyDown={() => {}}
            role="button"
            tabIndex="0"
            className="menu-toggle-btn"
          >
            <MenuIcon />
          </span>
        </Box>
      </HeaderContainer>
    </Wrapper>
  );
};

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

export default Header;
