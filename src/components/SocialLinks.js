/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FacebookIcon from './FacebookIcon';
import GithubIcon from './GithubIcon';
import InstagramIcon from './InstagramIcon';
import LinkedinIcon from './LinkedinIcon';
import TwitterIcon from './TwitterIcon';
import LinkIcon from './LinkIcon';

const SocialLinksWrapper = styled.ul`
  list-style: none;
  margin: 1rem 0;
  padding: 0;

  li {
    margin-bottom: ${({ theme }) => theme.space.sm}px;

    ::before {
      content: '';
      margin-right: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }

    svg {
      position: relative;
      top: -1px;
      margin-right: ${({ theme }) => theme.space.sm}px;
    }

    a {
      color: ${({ theme }) => theme.colors.text0};
      transition: all ease-in-out 0.3s;

      &:hover {
        color: ${({ theme }) => theme.colors.primary1};
      }
    }
  }
`;

const SocialIcon = ({ site, ...props }) => {
  switch (site) {
    case 'facebook':
      return <FacebookIcon {...props} />;
    case 'github':
      return <GithubIcon {...props} />;
    case 'instagram':
      return <InstagramIcon {...props} />;
    case 'linkedin':
      return <LinkedinIcon {...props} />;
    case 'twitter':
      return <TwitterIcon {...props} />;
    default:
      return <LinkIcon {...props} />;
  }
};

const SocialLinks = ({ links = [] }) => (
  <SocialLinksWrapper>
    {links.map((item) => (
      <li key={item.site}>
        <SocialIcon site={item.site} size={16} />
        <a href={item.url}>{item.url.replace('https://', '')}</a>
      </li>
    ))}
  </SocialLinksWrapper>
);

SocialIcon.defaultProps = {
  site: '',
};

SocialIcon.propTypes = {
  site: PropTypes.string,
};

SocialLinks.defaultProps = {
  links: [],
};

SocialLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
};

export default SocialLinks;
