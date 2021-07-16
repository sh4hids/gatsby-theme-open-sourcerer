import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getConfig, setConfig } from './src/services/ConfigServices';

export const ThemeContext = React.createContext();

const Provider = ({ children }) => {
  const config = getConfig() || {};
  const [theme, setTheme] = useState(config.theme || 'light');

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme: (selectedTheme) => {
          setConfig({ ...config, theme: selectedTheme });
          return setTheme(selectedTheme);
        },
      }}
    >
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
