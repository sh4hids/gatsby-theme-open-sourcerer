import React from 'react';
import { ThemeProvider } from 'styled-components';

import * as themes from '../styles/themes';
import GlobalStyle from '../styles/GlobalStyles';
import { ThemeContext } from '../../ThemeProvider';

const DefaultLayout = ({ children }) => (
  <ThemeContext.Consumer>
    {(context = { theme: 'light' }) => (
      <ThemeProvider theme={themes[context.theme]}>
        <GlobalStyle />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, atque
          ipsa dolorem molestias rerum ab dolores vero modi, et nostrum officiis
          provident voluptas commodi esse repellat eligendi officia. Dicta,
          esse.
        </p>
        <h1>Test</h1>
        {children}
      </ThemeProvider>
    )}
  </ThemeContext.Consumer>
);

export default DefaultLayout;
