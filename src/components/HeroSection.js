import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import urljoin from 'url-join';
import { format } from 'date-fns';

import Text from './Text';
import Container from './Container';
import Box from './Box';
import Image from './Image';
import heroImage from '../assets/images/hero-bg.svg';
import PostMeta from './PostMeta';

const Wrapper = styled(Container)`
  min-height: 360px;
  padding-top: 76px;
  margin-bottom: ${({ theme }) => theme.space.xl}px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .hero-background {
    position: absolute;
    right: 16px;
    bottom: 0;
    width: 72vw;
    z-index: -1;
    opacity: 0.32;

    ${({ theme }) => `${theme.mediaQueries.sm} {
      width: 48vw;
      opacity: 0.72;
    }`};

    ${({ theme }) => `${theme.mediaQueries.md} {
      width: 20vw;
    }`};
  }
`;

const HeroSection = ({ title, description, image, postMeta }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          heroImage
          siteUrl
        }
      }
    }
  `);

  let { heroImage: customHeroImage } = data.site.siteMetadata;
  const { siteUrl } = data.site.siteMetadata;

  if (customHeroImage) {
    customHeroImage = urljoin(siteUrl, 'images', customHeroImage);
  }

  return (
    <Wrapper p={3}>
      <Image
        src={image || customHeroImage || heroImage}
        alt="hero-background"
        className="hero-background"
      />
      <Box width={[1, 1, 2.8 / 4]} py={[0, 0, 4]}>
        <Text variant="h1" textAlign={['center', 'center', 'left']}>
          {title || 'test'}
        </Text>
        {!postMeta && <Text>{description}</Text>}
        {postMeta && <PostMeta postMeta={postMeta} />}
      </Box>
    </Wrapper>
  );
};

HeroSection.defaultProps = {
  image: '',
  postMeta: null,
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  postMeta: PropTypes.shape({
    author: PropTypes.string,
    publishedAt: PropTypes.string,
    timeToRead: PropTypes.number,
  }),
};

export default HeroSection;
