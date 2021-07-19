/* eslint-disable prefer-destructuring */
const space = [0, 4, 8, 16, 32, 64];
const fontSizes = [13, 15, 18, 22, 26, 31, 37, 45, 54, 65];
const fonts = {
  body: `'Fira Sans', sans-serif`,
};
const breakpoints = ['240px', '480px', '768px', '1024px', '1224px'];

const mediaQueries = {
  xs: `@media only screen and (min-width : ${breakpoints[1]})`,
  sm: `@media only screen and (min-width : ${breakpoints[2]})`,
  md: `@media only screen and (min-width : ${breakpoints[3]})`,
  lg: `@media only screen and (min-width : ${breakpoints[4]})`,
};

const lineHeights = [1, 1.3, 1.6];
const fontWeights = [400, 500, 700];

const colors = {
  primary: ['#1E8BB8', '#21AAE2', '#5CC7EB'],
  dark: ['#191924', '#27283F', '#53556E'],
  light: ['#F2F2F5', '#FAFAFC', '#FFFFFF'],
  success: ['#04A660', '#07C270', '#3ADA8A'],
  error: ['#BE1918', '#F43A3C', '#F56161'],
  warning: ['#E27A00', '#FF8E00', '#FDA642'],
  elevation: {
    dark: ['#2B2C46', '#2D2E49', '#2F304C'],
  },
};

space.sm = space[1];
space.md = space[2];
space.lg = space[3];
space.xl = space[4];

fontSizes.label2 = fontSizes[0];
fontSizes.label1 = fontSizes[1];
fontSizes.body = fontSizes[2];
fontSizes.h6 = fontSizes[2];
fontSizes.h5 = fontSizes[3];
fontSizes.h4 = fontSizes[4];
fontSizes.h3 = fontSizes[5];
fontSizes.h2 = fontSizes[6];
fontSizes.h1 = fontSizes[7];
fontSizes.display1 = fontSizes[8];
fontSizes.display2 = fontSizes[9];

lineHeights.body = lineHeights[2];
lineHeights.heading = lineHeights[1];

fontWeights.normal = fontWeights[0];
fontWeights.medium = fontWeights[1];
fontWeights.bold = fontWeights[2];

colors.bg0 = colors.light[0];
colors.bg1 = colors.light[1];
colors.bg2 = colors.light[2];
colors.text0 = colors.dark[0];
colors.text1 = colors.dark[1];
colors.text2 = colors.dark[2];

const baseTheme = {
  space,
  fontSizes,
  fonts,
  breakpoints,
  mediaQueries,
  lineHeights,
  fontWeights,
  colors,
};

export default baseTheme;
