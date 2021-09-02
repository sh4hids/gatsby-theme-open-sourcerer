import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { SEO } from './src/components';
import theme from './src/styles/theme';

export const ThemeContext = React.createContext();

const Provider = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState('light');

  useEffect(() => {
    const root = window.document.documentElement;

    const initialColorValue =
      root.style.getPropertyValue('--initial-color-mode') || 'light';

    rawSetColorMode(initialColorValue);
  }, []);

  const contextValue = React.useMemo(() => {
    function setColorMode(newValue) {
      const root = window.document.documentElement;

      localStorage.setItem('color-mode', newValue);

      if (newValue === 'dark') {
        theme.colors.light.forEach((color, index) => {
          const cssVarName = `--color-text-${index}`;

          root.style.setProperty(cssVarName, color);
        });
        theme.colors.dark.forEach((color, index) => {
          const cssVarName = `--color-bg-${index}`;

          root.style.setProperty(cssVarName, color);
        });
      } else {
        theme.colors.light.forEach((color, index) => {
          const cssVarName = `--color-bg-${index}`;

          root.style.setProperty(cssVarName, color);
        });
        theme.colors.dark.forEach((color, index) => {
          const cssVarName = `--color-text-${index}`;

          root.style.setProperty(cssVarName, color);
        });
      }

      rawSetColorMode(newValue);
    }

    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  return (
    <ThemeContext.Provider
      value={{
        ...contextValue,
      }}
    >
      <SEO />
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeProvider = ({ element }) => <Provider>{element}</Provider>;

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

ThemeProvider.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ThemeProvider;
