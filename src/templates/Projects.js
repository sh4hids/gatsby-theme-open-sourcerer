import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { ProjectGrid } from '../components';
import { DefaultLayout } from '../layouts';

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allYamlPage(filter: { pageType: { eq: "Projects" } }) {
        nodes {
          metaDescription
          pageType
          title
          contents {
            ... on Project {
              name
              description
              url
              githubRepo
            }
          }
        }
      }
    }
  `);

  const {
    title = 'Projects',
    metaDescription = '',
    contents = [],
  } = data.allYamlPage.nodes[0] || {};

  return (
    <DefaultLayout title={title} description={metaDescription} url="/projects/">
      <ProjectGrid projects={contents} />
    </DefaultLayout>
  );
};

export default Projects;
