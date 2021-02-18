import { useQuery } from '@apollo/client';
import { AddIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Input,
  Spinner,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { TODOS } from 'types';

import Todo from '../components/Todo';
import { GET_ALL_TODOS } from '../queries/query';

const Home: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { loading, data } = useQuery<TODOS>(GET_ALL_TODOS);
  console.log(data);

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
        {loading ? (
          <Spinner />
        ) : (
          data?.todos.map(({ id, todo, isCompleted }) => (
            <Todo key={id} todo={todo} isCompleted={isCompleted} />
          ))
        )}
      </Flex>
    </Box>
  );
};
export default Home;
