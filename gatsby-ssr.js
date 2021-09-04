/* eslint-disable import/prefer-default-export */
import React from 'react';

import ThemeProvider from './ThemeProvider';
import { baseTheme as theme } from './src/styles/themes';

function setColorsByTheme() {
  const colors = '🌈';
  const colorModeKey = 'color-mode';
  const colorModeCssProp = '--initial-color-mode';

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersDarkFromMQ = mql.matches;
  const persistedPreference = localStorage.getItem(colorModeKey);

  let colorMode = 'light';

  const hasUsedToggle = typeof persistedPreference === 'string';

  if (hasUsedToggle) {
    colorMode = persistedPreference;
  } else {
    colorMode = prefersDarkFromMQ ? 'dark' : 'light';
  }

  const root = document.documentElement;

  root.style.setProperty(colorModeCssProp, colorMode);

  Object.entries(colors).forEach(([name, values]) => {
    values.forEach((color, index) => {
      const cssVarName = `--color-${name}-${index}`;

      root.style.setProperty(cssVarName, color);
    });
  });

  if (colorMode === 'dark') {
    colors.dark.forEach((color, index) => {
      const cssVarName = `--color-bg-${index}`;

      root.style.setProperty(cssVarName, color);
    });
    colors.light.forEach((color, index) => {
      const cssVarName = `--color-text-${index}`;

      root.style.setProperty(cssVarName, color);
    });
    colors.primary.forEach((color, index) => {
      const cssVarName = `--color-accent-${
        colors.primary.length - (index + 1)
      }`;

      root.style.setProperty(cssVarName, color);
    });
  } else {
    colors.light.forEach((color, index) => {
      const cssVarName = `--color-bg-${index}`;

      root.style.setProperty(cssVarName, color);
    });
    colors.dark.forEach((color, index) => {
      const cssVarName = `--color-text-${index}`;

      root.style.setProperty(cssVarName, color);
    });
    colors.primary.forEach((color, index) => {
      const cssVarName = `--color-accent-${index}`;

      root.style.setProperty(cssVarName, color);
    });
  }
}

const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme).replace(
    "'🌈'",
    JSON.stringify(theme.colors)
  );

  const calledFunction = `(${boundFn})()`;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

const FallbackStyles = () => {
  let colorString = ``;

  Object.entries(theme.colors).forEach(([name, values], nameIndex) => {
    values.forEach((color, index) => {
      colorString += `${
        nameIndex === 0 && index === 0 ? '' : '\n'
      }--color-${name}-${index}: ${color};`;
    });
  });

  theme.colors.light.forEach((color, index) => {
    colorString += `\n--color-bg-${index}: ${color};`;
  });

  theme.colors.dark.forEach((color, index) => {
    colorString += `\n--color-text-${index}: ${color};`;
  });

  const wrappedInSelector = `html { ${colorString} }`;

  return <style>{wrappedInSelector}</style>;
};

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents(<FallbackStyles key="theme-colors-fallback" />);
  setPreBodyComponents(<MagicScriptTag key="theme-colors" />);
};

export const wrapRootElement = ThemeProvider;
