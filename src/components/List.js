/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import { space, layout, typography, color } from 'styled-system';
import PropTypes from 'prop-types';

const ListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.h5}px;

  ::before {
    color: ${({ theme }) => theme.colors.text1};
    content: '⧉';
    margin-right: ${({ theme }) => theme.space.md}px;
  }

  ${space};
  ${typography};
  ${layout};
  ${color};
`;

const List = ({ items = [], ...props }) => (
  <ListContainer>
    {items.map((item) => (
      <ListItem key={item} {...props}>
        {item}
      </ListItem>
    ))}
  </ListContainer>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;
