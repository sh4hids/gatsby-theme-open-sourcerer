/* eslint-disable no-nested-ternary */
import React, { useEffect, useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { ThemeContext } from '../../ThemeProvider';
import Box from './Box';

const COMMENT_SECTION_ID = 'comments-container';

const UtterancesComments = () => {
  const context = useContext(ThemeContext);
  const selectedTheme = context.colorMode || 'light';
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          utterancesCommentRepo
        }
      }
    }
  `);
  const { utterancesCommentRepo } = data.site.siteMetadata;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', `${utterancesCommentRepo || ''}`);
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute(
      'theme',
      !selectedTheme
        ? 'preferred-color-scheme'
        : selectedTheme === 'light'
        ? 'github-light'
        : 'dark-blue'
    );
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    const comments = document.getElementById(COMMENT_SECTION_ID);
    if (comments) comments.appendChild(script);

    return () => {
      const commentEl = document.getElementById(COMMENT_SECTION_ID);
      if (commentEl) comments.innerHTML = '';
    };
  }, [selectedTheme]);

  return (
    <Box
      p={3}
      my={4}
      bg="var(--color-bg-1)"
      borderRadius={8}
      id={COMMENT_SECTION_ID}
    />
  );
};

export default UtterancesComments;
