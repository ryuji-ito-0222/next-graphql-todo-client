import { useMutation, useQuery } from '@apollo/client';
import { AddIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Input,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { ADD_TODO } from 'graphql/mutations/mutation';
import React, { useState } from 'react';
import { TODO, TODOS } from 'types';

import Todo from '../components/Todo';
import { GET_ALL_TODOS } from '../graphql/queries/query';

const Home: React.FC = () => {
  const [input, setInput] = useState('');
  const { loading, data } = useQuery<TODOS>(GET_ALL_TODOS);
  const [addTodo, { error }] = useMutation<{ addTodo: TODO }, { todo: string }>(
    ADD_TODO,
    {
      variables: { todo: input },
      refetchQueries: [{ query: GET_ALL_TODOS }],
      awaitRefetchQueries: true,
    },
  );

  const handleClick = async () => {
    if (input.trim()) {
      await addTodo();
      setInput('');
    }
  };

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
        {error && <Text>Oh no Error!!!</Text>}
        <Flex>
          <Input
            type="text"
            placeholder="Todoを入力してね!"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton
            icon={<AddIcon />}
            aria-label="Add Button"
            onClick={handleClick}
          />
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
