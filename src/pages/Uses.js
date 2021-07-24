import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import DefaultLayout from '../layouts/DefaultLayout';
import { SEO } from '../components';

const UsesTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allYamlPage {
        nodes {
          title
          pageType
          metaDescription
          contents {
            ... on Uses {
              name
              items
            }
          }
        }
      }
    }
  `);

  const pageData =
    data.allYamlPage.nodes.find((node) => node.pageType === 'Uses') || {};

  const title = pageData.title || 'Uses';
  const metaDescription = pageData.metaDescription || '';
  const usesItems = pageData.contents || [];

  return (
    <DefaultLayout>
      <SEO title={title} description={metaDescription} />
      <h1>{title}</h1>
      <p>{metaDescription}</p>
      <pre>{JSON.stringify(usesItems, null, 2)}</pre>
    </DefaultLayout>
  );
};

export default UsesTemplate;
