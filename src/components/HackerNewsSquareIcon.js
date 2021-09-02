import styled from 'styled-components';
import { HackerNewsSquare } from '@styled-icons/fa-brands';

const HackerNewsSquareIcon = styled(HackerNewsSquare)`
  stroke: ${({ theme, stroke }) =>
    theme.colors[stroke] || `var(--color-text-0)`};
  stroke-width: ${({ strokeWidth }) => strokeWidth || 1.6};
  font-weight: ${(props) => (props.important ? 'bold' : 'normal')};
  width: 24px;
`;

export default HackerNewsSquareIcon;
