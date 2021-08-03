/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Text } from '../components';

const Four0Four = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  console.log(data);

  return <Text>Nothing Found!</Text>;
};

export default Four0Four;
