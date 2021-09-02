import styled from 'styled-components';
import { Twitter } from '@styled-icons/feather';

const TwitterIcon = styled(Twitter)`
  stroke: ${({ theme, stroke }) =>
    theme.colors[stroke] || `var(--color-text-0)`};
  stroke-width: ${({ strokeWidth }) => strokeWidth || 1.6};
  font-weight: ${(props) => (props.important ? 'bold' : 'normal')};
  width: 24px;
`;

export default TwitterIcon;
