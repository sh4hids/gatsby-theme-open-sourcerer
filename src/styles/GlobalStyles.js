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
    margin: ${({ theme }) => theme.space.xl}px 0;
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


  .gatsby-highlight {
    overflow: auto;
    margin: ${({ theme }) => theme.space.lg}px 0;
    
    pre {
      border-radius: 8px;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      font-size: ${({ theme }) => theme.fontSizes.body}px;
      font-weight: ${({ theme }) => theme.fontWeights.medium};

      ::before {
        color: ${({ theme }) => theme.colors.text1};
        content: '⧉';
        margin-right: ${({ theme }) => theme.space.md}px;
      }
    }
  }

  .post-body {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      padding-top: 76px;
      margin-top: -76px;

      .header-anchor-icon.before {
        padding-top: 76px;
      }
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.bg2};
  }

  ::-webkit-scrollbar-thumb {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary0};
    transition: all ease-in-out 0.3s;

    
    :hover {
      background-color: ${({ theme }) => theme.colors.primary1};
    }
    
    :active {
      background-color: ${({ theme }) => theme.colors.primary2};
    }
  }
`;

export default GlobalStyle;
