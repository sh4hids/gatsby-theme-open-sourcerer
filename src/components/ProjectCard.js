/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Box from './Box';
import Text from './Text';
import LinkIcon from './LinkIcon';
import StarIcon from './StarIcon';

const Wrapper = styled.a`
  border-radius: 8px;
  background-color: var(--color-bg-1);
  color: var(--color-text-0);
  box-shadow: ${({ theme }) => theme.elevations[0]};
  padding: ${({ theme }) => theme.space.xl}px;
  transition: all ease-in-out 0.3s;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  word-break: break-word;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  :hover {
    color: var(--color-text-0);
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

    p {
      display: inline;
      transition: all ease-in-out 0.3s;

      :hover {
        color: var(--color-primary-0);
      }
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
    <Wrapper href={project.url} aria-label={project.name} {...props}>
      <Text variant="h3">{project.name}</Text>
      <Text>{project.description}</Text>
      <Box display="flex" justifyContent="space-between">
        <span className="project-meta project-meta-link">
          <LinkIcon size={16} />
          <Text>View Project</Text>
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
