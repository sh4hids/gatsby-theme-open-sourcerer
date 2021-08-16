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

  return (
    <DefaultLayout
      title={data.allYamlPage.nodes[0].title}
      description={data.allYamlPage.nodes[0].metaDescription}
      url="/projects/"
    >
      <ProjectGrid projects={data.allYamlPage.nodes[0].contents} />
    </DefaultLayout>
  );
};

export default Projects;
