/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Box from './Box';
import Text from './Text';
import LinkIcon from './LinkIcon';
import StarIcon from './StarIcon';

const Wrapper = styled(Box)`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.bg2};
  color: ${({ theme }) => theme.colors.text1};
  box-shadow: ${({ theme }) => theme.elevations[0]};

  :hover {
    transition: all ease-in-out 0.3s;
    box-shadow: ${({ theme }) => theme.elevations[2]};
  }

  .project-meta {
    svg {
      position: relative;
      top: -2px;
    }
  }

  .project-meta-link {
    svg {
      margin-right: ${({ theme }) => theme.space.sm}px;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.text1};

    :hover {
      transition: all ease-in-out 0.3s;
      color: ${({ theme }) => theme.colors.primary1};
    }
  }
`;

const ProjectCard = ({ project, ...props }) => {
  const [starsCount, setStarsCount] = useState(0);
  useEffect(async () => {
    const response = await fetch(
      `https://api.github.com/repos/${project.githubRepo}`
    );
    const resultData = await response.json();
    if (resultData) {
      setStarsCount(resultData.stargazers_count);
    }
  }, []);

  return (
    <Wrapper p={4} {...props}>
      <Text variant="h4">{project.name}</Text>
      <Text>{project.description}</Text>
      <Box display="flex" justifyContent="space-between">
        <span className="project-meta project-meta-link">
          <LinkIcon size={16} />
          <a href={project.url}>View Project</a>
        </span>
        <span className="project-meta">
          <StarIcon size={16} /> <span>{starsCount}</span>
        </span>
      </Box>
    </Wrapper>
  );
};

ProjectCard.defaultProps = {
  project: {},
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    githubRepo: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default ProjectCard;
