import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Text } from '../components';
import { DefaultLayout } from '../layouts';

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            summary
          }
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata || {};
  return (
    <DefaultLayout
      title="About"
      description={author.summary || ''}
      url="/about/"
    >
      <Text>Test</Text>
    </DefaultLayout>
  );
};

export default About;
