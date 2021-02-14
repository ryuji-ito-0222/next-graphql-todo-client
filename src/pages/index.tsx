import { AddIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, IconButton, Input } from '@chakra-ui/react';
import React, { useRef } from 'react';

import Todo from '../components/Todo';

const Home: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Box h="100vh" p={5}>
      <Flex
        direction="column"
        w="80%"
        maxWidth="800px"
        minWidth="500px"
        border="3px solid blue"
        borderRadius="5px"
        height="100%"
        mx="auto"
        p={2}
      >
        <Heading as="h2" fontSize="30px">
          Todo
        </Heading>
        <Flex>
          <Input type="text" placeholder="Todoを入力してね!" ref={inputRef} />
          <IconButton icon={<AddIcon />} aria-label="Add Button" />
        </Flex>
        <Todo todo="Hello World" completed />
      </Flex>
    </Box>
  );
};
export default Home;
