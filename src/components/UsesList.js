import React from 'react';
import Text from './Text';
import List from './List';
import Box from './Box';

const UsesList = ({ contents = [] }) => {
  const uses = [];

  contents.forEach((content) => {
    uses.push(
      <Box key={content.name} mb={4}>
        <Text variant="h3" mb={3}>
          {content.name}
        </Text>
        {content.items && <List items={content.items} />}
      </Box>
    );
  });

  return uses;
};

export default UsesList;
