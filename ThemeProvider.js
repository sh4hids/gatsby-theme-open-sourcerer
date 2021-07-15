import React, { useState } from 'react';
import { getConfig } from './src/services/ConfigServices';

export const ThemeContext = React.createContext();

const Provider = (props) => {
  const config = getConfig() || {};
  const [theme, setTheme] = useState(config.theme || 'light');

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme: (theme) => setTheme(theme),
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

const ThemeProvider = ({ element }) => <Provider>{element}</Provider>;

export default ThemeProvider;