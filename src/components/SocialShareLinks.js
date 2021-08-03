import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

import Text from './Text';
import FacebookSquareIcon from './FacebookSquareIcon';
import TwitterSquareIcon from './TwitterSquareIcon';
import RedditSquareIcon from './RedditSquareIcon';
import HackerNewsSquareIcon from './HackerNewsSquareIcon';

const Link = styled.a``;

const SocialShareIcon = ({ link, ariaLabel, children }) => (
  <Link href={link} target="_blank" rel="noopener" aria-label={ariaLabel}>
    {children}
  </Link>
);

const Container = styled.ul`
  margin: ${({ theme }) => theme.space.xl}px 0;
  padding: 0;
  text-align: center;

  li {
    display: inline-flex;
    margin-right: 16px;
    opacity: 0.8;
    transition: all 0.3s;
    &:last-child {
      margin-right: 0;
    }
    &::before {
      content: '';
      margin: 0;
      top: 0;
    }

    svg {
      path {
        fill: ${({ theme }) => theme.colors.text0};
      }
    }

    &:hover {
      opacity: 1;
      transform: translateY(-4px);
      svg {
        path {
          fill: ${({ theme }) => theme.colors.primary[0]};
        }
      }
    }
  }
`;

const SocialShareLinks = ({ title, link }) => {
  const data = useStaticQuery(graphql`
    query {
      site(siteMetadata: {}) {
        siteMetadata {
          socialShareTitle
        }
      }
    }
  `);

  return (
    <Container>
      <Text>{data.site.siteMetadata.socialShareTitle || '-: Share :-'}</Text>
      <li>
        <SocialShareIcon
          ariaLabel="twitter-share"
          link={`https://twitter.com/intent/tweet?text=${title}&url=${link}`}
        >
          <TwitterSquareIcon />
        </SocialShareIcon>
      </li>
      <li>
        <SocialShareIcon
          ariaLabel="facebook-share"
          link={`https://facebook.com/sharer/sharer.php?u=${link}`}
        >
          <FacebookSquareIcon />
        </SocialShareIcon>
      </li>
      <li>
        <SocialShareIcon
          ariaLabel="hackernews-share"
          link={`https://news.ycombinator.com/submitlink?u=${link}&t=${title}`}
        >
          <HackerNewsSquareIcon />
        </SocialShareIcon>
      </li>
      <li>
        <SocialShareIcon
          ariaLabel="reddit-share"
          link={`https://reddit.com/submit/?url=${link}&resubmit=true&title=${title}`}
        >
          <RedditSquareIcon />
        </SocialShareIcon>
      </li>
    </Container>
  );
};

SocialShareIcon.propTypes = {
  link: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

SocialShareLinks.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SocialShareLinks;