import styled from 'styled-components';

const BrandLogo = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text1};
  font-size: ${({ theme }) => theme.fontSizes.h5}px;
`;

export default BrandLogo;
