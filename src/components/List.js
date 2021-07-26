import React from 'react';
import styled from 'styled-components';
import { space, layout, typography } from 'styled-system';
import PropTypes from 'prop-types';
import ArrowRightIcon from './ArrowRightIcon';

const ListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.h5}px;

  svg {
    width: 1.225rem;
    height: 1.225rem;
    margin-right: ${({ theme }) => theme.space.sm}px;
  }

  ${space};
  ${typography};
  ${layout};
`;

const List = ({ items = [] }) => (
  <ListContainer>
    {items.map((item) => (
      <ListItem key={item}>
        <ArrowRightIcon /> {item}
      </ListItem>
    ))}
  </ListContainer>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;
