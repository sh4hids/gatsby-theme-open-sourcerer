import styled from 'styled-components';
import { space, width, height, layout, color } from 'styled-system';

const Divider = styled.div`
  background: radial-gradient(
    50% 1044012.75% at 50% 50.02%,
    rgba(33, 170, 226, 0.72) 0%,
    rgba(33, 170, 226, 0.24) 100%
  );
  border-radius: 2px;
  height: 1px;
  ${width};
  ${height};
  ${space};
  ${layout};
  ${color};
`;

export default Divider;
