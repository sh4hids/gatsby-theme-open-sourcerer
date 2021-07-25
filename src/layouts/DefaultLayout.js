import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import * as themes from '../styles/themes';
import GlobalStyle from '../styles/GlobalStyles';
import { ThemeContext } from '../../ThemeProvider';
import { Header, Container, Footer, SEO, HeroSection } from '../components';

const DefaultLayout = ({
  children,
  title,
  heroTitle,
  description,
  url,
  image,
}) => (
  <ThemeContext.Consumer>
    {(context = { theme: 'light' }) => (
      <ThemeProvider theme={themes[context.theme]}>
        <SEO title={title} description={description} url={url} image={image} />
        <GlobalStyle />
        <Header theme={context.theme} changeTheme={context.changeTheme} />
        <HeroSection title={heroTitle || title} description={description} />
        <Container p={3}>{children}</Container>
        <Footer />
      </ThemeProvider>
    )}
  </ThemeContext.Consumer>
);

DefaultLayout.defaultProps = {
  title: '',
  heroTitle: '',
  description: '',
  url: '',
  image: '',
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  heroTitle: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
};

export default DefaultLayout;
