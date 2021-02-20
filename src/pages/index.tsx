import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

const Home: React.FC = () => (
  <Box h="100vh" p={5}>
    <Flex
      direction="column"
      maxWidth="800px"
      minWidth="500px"
      border="3px solid"
      borderColor="blue.500"
      borderRadius="5px"
      height="100%"
      mx="auto"
      w="80%"
      p={2}
    >
      <Heading as="h2" fontSize="36px" textAlign="center" p={3}>
        Todo
      </Heading>
      <TodoInput />
      <TodoList />
    </Flex>
  </Box>
);
export default Home;
