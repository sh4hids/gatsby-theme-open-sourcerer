import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Text, UsesList } from '../components';
import { DefaultLayout } from '../layouts';

const Uses = () => {
  const data = useStaticQuery(graphql`
    query {
      allYamlPage(filter: { pageType: { eq: "Uses" } }) {
        nodes {
          metaDescription
          pageType
          title
          contents {
            ... on Uses {
              name
              type
              items
            }
          }
        }
      }
    }
  `);
  const {
    title = 'Uses',
    metaDescription = `Following are some of the tools I regularly use as a developer. As technology moves very fast, some of these might get replaced by some other new shiny ones. I'll try o keep this list updated.`,
    contents = [],
  } = data.allYamlPage.nodes[0] || {};

  return (
    <DefaultLayout title={title} description={metaDescription} url="/uses/">
      <span>
        {contents.length ? (
          <UsesList contents={contents} />
        ) : (
          <Text variant="h4">Sorry! No uses data found!</Text>
        )}
      </span>
    </DefaultLayout>
  );
};

export default Uses;
