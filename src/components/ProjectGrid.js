import React from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects = [] }) => (
  <Box display="flex" flexWrap="wrap" mx={-3}>
    {projects.map((project) => (
      <Box p={3} width={[1, 1, 1 / 2]} key={project.name}>
        <ProjectCard project={project} />
      </Box>
    ))}
  </Box>
);

ProjectGrid.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
};

export default ProjectGrid;
