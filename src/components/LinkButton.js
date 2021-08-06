import { Link } from 'gatsby';
import styled from 'styled-components';
import { space, color, typography, layout } from 'styled-system';

const LinkButton = styled(Link)`
  padding: ${({ theme }) => theme.space.md}px ${({ theme }) => theme.space.lg}px;
  background-color: ${({ theme }) => theme.colors.bg2};
  color: ${({ theme }) => theme.colors.text1};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: 8px;
  text-transform: uppercase;
  transition: all ease-in-out 0.3s;
  box-shadow: ${({ theme }) => theme.elevations[0]};

  &:hover {
    box-shadow: ${({ theme }) => theme.elevations[1]};
  }

  ${space};
  ${color};
  ${layout};
  ${typography};
`;

export default LinkButton;
