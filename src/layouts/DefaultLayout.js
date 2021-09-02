import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import * as themes from '../styles/themes';
import GlobalStyle from '../styles/GlobalStyles';
import { ThemeContext } from '../../ThemeProvider';
import { Header, Container, Footer, SEO, HeroSection } from '../components';
import toTitleCase from '../utils/toTitleCase';

const DefaultLayout = ({
  children,
  title,
  heroTitle,
  description,
  url,
  image,
  postMeta,
}) => {
  const context = useContext(ThemeContext);

  return (
    <ThemeProvider theme={themes[context.theme]}>
      <GlobalStyle />
      <SEO
        title={toTitleCase(title)}
        description={description}
        url={url}
        image={image}
      />
      <Header
        theme={context.theme}
        changeTheme={context.changeTheme}
        colorMode={context.colorMode}
        setColorMode={context.setColorMode}
      />
      <HeroSection
        title={heroTitle || toTitleCase(title)}
        description={description}
        postMeta={postMeta}
      />
      <Container p={3}>{children}</Container>
      <Footer />
    </ThemeProvider>
  );
};

DefaultLayout.defaultProps = {
  title: '',
  heroTitle: '',
  description: '',
  url: '',
  image: '',
  postMeta: null,
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  heroTitle: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  postMeta: PropTypes.shape({
    author: PropTypes.string,
    publishedAt: PropTypes.string,
    timeToRead: PropTypes.number,
  }),
};

export default DefaultLayout;
