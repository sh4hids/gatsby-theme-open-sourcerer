import styled from 'styled-components';

const BrandLogo = styled.a`
  text-decoration: none;
  color: var(--color-text-1);
  font-size: ${({ theme }) => theme.fontSizes.h5};
`;

export default BrandLogo;
