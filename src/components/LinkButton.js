import { Link } from 'gatsby';
import styled from 'styled-components';
import { space, color, typography, layout } from 'styled-system';

const LinkButton = styled(Link)`
  padding: ${({ theme }) => theme.space.md}px ${({ theme }) => theme.space.lg}px;
  background-color: var(--color-bg-1);
  color: var(--color-text-0);
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
