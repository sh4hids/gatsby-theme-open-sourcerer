import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.bg1};
    color: ${({ theme }) => theme.colors.text1};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.body}px;
    line-height: ${({ theme }) => theme.lineHeights.body};
  }

  p {
    margin: 1rem 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: ${({ theme }) => theme.lineHeights.heading};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.h1}px;
  }
  
  h2 {
    font-size: ${({ theme }) => theme.fontSizes.h2}px;
  }
  
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.h3}px;
  }
  
  h4 {
    font-size: ${({ theme }) => theme.fontSizes.h4}px;
  }
  
  h5 {
    font-size: ${({ theme }) => theme.fontSizes.h5}px;
  }
  
  h6 {
    font-size: ${({ theme }) => theme.fontSizes.h6}px;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary[1]};

    &:hover {
      transition: all ease-in-out 0.3s;
      color: ${({ theme }) => theme.colors.primary[0]};
    }
  }
`;

export default GlobalStyle;
