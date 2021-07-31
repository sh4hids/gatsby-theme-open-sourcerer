import styled from 'styled-components';
import { Calendar } from '@styled-icons/feather';

const CalendarIcon = styled(Calendar)`
  stroke: ${({ theme, stroke }) => stroke || theme.colors.text1};
  stroke-width: ${({ strokeWidth }) => strokeWidth || 1.6};
  font-weight: ${(props) => (props.important ? 'bold' : 'normal')};
  width: 24px;
`;

export default CalendarIcon;
