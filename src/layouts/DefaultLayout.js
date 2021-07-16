import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import * as themes from '../styles/themes';
import GlobalStyle from '../styles/GlobalStyles';
import { ThemeContext } from '../../ThemeProvider';
import { Header, Container } from '../components';

const DefaultLayout = ({ children }) => (
  <ThemeContext.Consumer>
    {(context = { theme: 'light' }) => (
      <ThemeProvider theme={themes[context.theme]}>
        <GlobalStyle />
        <Header theme={context.theme} changeTheme={context.changeTheme} />
        <Container p={3} pt={60}>
          <h1>Test</h1>
          {children}
        </Container>
      </ThemeProvider>
    )}
  </ThemeContext.Consumer>
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
