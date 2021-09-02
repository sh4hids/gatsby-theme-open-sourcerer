import styled from 'styled-components';
import { Facebook } from '@styled-icons/feather';

const FacebookIcon = styled(Facebook)`
  stroke: ${({ theme, stroke }) =>
    theme.colors[stroke] || `var(--color-text-0)`};
  stroke-width: ${({ strokeWidth }) => strokeWidth || 1.6};
  font-weight: ${(props) => (props.important ? 'bold' : 'normal')};
  width: 24px;
`;

export default FacebookIcon;
