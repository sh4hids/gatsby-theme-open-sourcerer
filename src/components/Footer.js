/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Box from './Box';
import Container from './Container';
import Text from './Text';
import SocialLinks from './SocialLinks';

const Wrapper = styled(Box)`
  background-color: ${({ theme }) =>
    theme.name === 'light' ? theme.colors.bg2 : theme.colors.bg0};
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            bio
            fullName
            links {
              site
              url
            }
          }
          footer {
            title
            description
            copyright
          }
        }
      }
    }
  `);

  const author = data.site.siteMetadata.author || {};
  const footer = data.site.siteMetadata.footer || {};

  return (
    <Wrapper>
      <Container py={[3, 3, 5]}>
        <Box display="flex" flexWrap="wrap">
          <Box width={[1, 1, 1 / 2]} p={3}>
            <Text variant="h6">{footer.title}</Text>
            <Text>{footer.description}</Text>
          </Box>
          <Box width={[1, 1, 1 / 2]} p={3}>
            <Text variant="h6">Social Links</Text>
            <SocialLinks links={author.links} />
          </Box>
          <Box width={1} p={3}>
            <Text>{footer.copyright}</Text>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Footer;
