import React from 'react';
import { graphql } from 'gatsby';

import { Text, UsesList } from '../components';
import DefaultLayout from '../layouts/DefaultLayout';

const Uses = ({ data }) => {
  const pageData = data.allYamlPage.nodes[0] || {};
  return (
    <DefaultLayout
      title={pageData.title || 'Uses'}
      description={
        pageData.metaDescription ||
        `Following are some of the tools I regularly use as a developer. As technology moves very fast, some of these might get replaced by some other new shiny ones. I'll try o keep this list updated.`
      }
      url="/uses/"
    >
      <span>
        {data.allYamlPage.nodes.length ? (
          <UsesList contents={data.allYamlPage.nodes[0].contents} />
        ) : (
          <Text variant="h4">Sorry! No uses data found!</Text>
        )}
      </span>
    </DefaultLayout>
  );
};

export const pageQuery = graphql`
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
`;

export default Uses;
