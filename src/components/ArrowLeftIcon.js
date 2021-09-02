import styled from 'styled-components';
import { ArrowLeft } from '@styled-icons/feather';

const ArrowLeftIcon = styled(ArrowLeft)`
  stroke: ${({ theme, stroke }) =>
    theme.colors[stroke] || `var(--color-text-0)`};
  stroke-width: ${({ strokeWidth }) => strokeWidth || 1.6};
  font-weight: ${(props) => (props.important ? 'bold' : 'normal')};
  width: 24px;
`;

export default ArrowLeftIcon;
