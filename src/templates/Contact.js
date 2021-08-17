import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Text } from '../components';
import { DefaultLayout } from '../layouts';

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            email
          }
        }
      }
    }
  `);

  return (
    <DefaultLayout title="Contact" description="" url="/contact/">
      <Text>
        Email: {data.site.siteMetadata.author.email || 'not specified'}
      </Text>
    </DefaultLayout>
  );
};

export default Contact;
