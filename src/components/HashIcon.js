import styled from 'styled-components';
import { Hash } from '@styled-icons/feather';

const HashIcon = styled(Hash)`
  stroke: ${({ theme, stroke }) => stroke || theme.colors.text1};
  stroke-width: ${({ strokeWidth }) => strokeWidth || 1.6};
  font-weight: ${(props) => (props.important ? 'bold' : 'normal')};
  width: 24px;
`;

export default HashIcon;
