import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import DefaultLayout from '../layouts/DefaultLayout';
import { SEO } from '../components';

const ProjectsTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allYamlPage {
        nodes {
          title
          metaDescription
          pageType
          contents {
            ... on Project {
              name
              description
              totalStars
              url
            }
          }
        }
      }
    }
  `);

  const pageData =
    data.allYamlPage.nodes.find((node) => node.pageType === 'Projects') || {};

  const title = pageData.title || 'Projects';
  const metaDescription = pageData.metaDescription || '';
  const projects = pageData.contents || [];

  return (
    <DefaultLayout>
      <SEO title={title} description={metaDescription} />
      <h1>{title}</h1>
      <p>{metaDescription}</p>
      <pre>{JSON.stringify(projects, null, 2)}</pre>
    </DefaultLayout>
  );
};

export default ProjectsTemplate;
