import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import * as themes from '../styles/themes';
import GlobalStyle from '../styles/GlobalStyles';
import { ThemeContext } from '../../ThemeProvider';
import { SEO } from '../components';
import toTitleCase from '../utils/toTitleCase';

const FullPageLayout = ({ children, title, description, url, image }) => {
  const context = useContext(ThemeContext);

  return (
    <ThemeProvider theme={themes[context.theme]}>
      <SEO
        title={toTitleCase(title)}
        description={description}
        url={url}
        image={image}
      />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

FullPageLayout.defaultProps = {
  title: '',
  description: '',
  url: '',
  image: '',
};

FullPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
};

export default FullPageLayout;
