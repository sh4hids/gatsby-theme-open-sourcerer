import styled from 'styled-components';
import { Github } from '@styled-icons/feather';

const GithubIcon = styled(Github)`
  stroke: ${({ theme, stroke }) => theme.colors[stroke] || theme.colors.text1};
  stroke-width: ${({ strokeWidth }) => strokeWidth || 1.6};
  font-weight: ${(props) => (props.important ? 'bold' : 'normal')};
  width: 24px;
`;

export default GithubIcon;
