import React from 'react';
import { graphql } from 'gatsby';

import { ProjectGrid } from '../components';
import { DefaultLayout } from '../layouts';

const Projects = ({ data, pageData }) => (
  <DefaultLayout
    title={pageData.title}
    description={pageData.metaDescription}
    url="/projects/"
  >
    <ProjectGrid projects={data.allYamlPage.nodes[0].contents} />
  </DefaultLayout>
);

export const pageQuery = graphql`
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
`;

export default Projects;
