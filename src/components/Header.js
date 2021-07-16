import React, { useState } from 'react';
import styled from 'styled-components';
import Container from './Container';
import Box from './Box';
import BrandLogo from './BrandLogo';
import HeaderMenu from './HeaderMenu';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';
import MenuIcon from './MenuIcon';
import { ThemeContext } from '../../ThemeProvider';

const Wrapper = styled.div`
  height: 60px;
  background-color: ${({ theme }) =>
    theme.name === 'light' ? theme.colors.bg2 : theme.colors.bg0};
  position: fixed;
  width: 100%;
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
    margin-left: ${({ theme }) => theme.space.lg}px;

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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <ThemeContext.Consumer>
      {(context = { theme: 'light' }) => (
        <Wrapper>
          <HeaderContainer p={3}>
            <BrandLogo href="/">MySite</BrandLogo>
            <Box display="flex">
              <HeaderMenu isMenuOpen={isMenuOpen} />
              <span
                onClick={() =>
                  context.changeTheme(
                    context.theme === 'light' ? 'dark' : 'light'
                  )
                }
                onKeyDown={() => {}}
                role="button"
                tabIndex="0"
                className="theme-toggle-btn"
              >
                {context.theme === 'light' ? <MoonIcon /> : <SunIcon />}
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
      )}
    </ThemeContext.Consumer>
  );
};

export default Header;
