import React from 'react';
import styled from 'styled-components';
import Box from './Box';
import Container from './Container';
import Text from './Text';

const Wrapper = styled(Box)``;
const FooterContainer = styled(Container)``;

const Footer = () => (
  <Wrapper bg="light.2">
    <FooterContainer>
      <Box display="flex" flexWrap="wrap">
        <Box width={[1, 1, 1 / 2]} p={3}>
          <Text variant="blockquote">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit illum, praesentium vero, dolorum eaque a molestias
            veniam minus nobis saepe quasi in. Distinctio eligendi blanditiis
            voluptas, optio officia accusamus quia!
          </Text>
        </Box>
        <Box width={[1, 1, 1 / 2]} p={3}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit illum, praesentium vero, dolorum eaque a molestias
            veniam minus nobis saepe quasi in. Distinctio eligendi blanditiis
            voluptas, optio officia accusamus quia!
          </p>
        </Box>
      </Box>
    </FooterContainer>
  </Wrapper>
);

export default Footer;
