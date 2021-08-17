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
      <Text>Email: {data.useStaticQuery.siteMetadata.author.email}</Text>
    </DefaultLayout>
  );
};

export default Contact;
