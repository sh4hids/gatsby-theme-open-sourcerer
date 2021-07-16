import baseTheme from './baseTheme';

const dark = {
  name: 'dark',
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    bg0: baseTheme.colors.dark[0],
    bg1: baseTheme.colors.dark[1],
    bg2: baseTheme.colors.dark[2],
    text0: baseTheme.colors.light[0],
    text1: baseTheme.colors.light[1],
    text2: baseTheme.colors.light[2],
  },
};

export default dark;
