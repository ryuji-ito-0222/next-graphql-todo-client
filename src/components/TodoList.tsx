import { useQuery } from '@apollo/client';
import { Flex, Skeleton, Stack } from '@chakra-ui/react';
import { GET_ALL_TODOS } from 'graphql/query';
import React from 'react';

import { TODOS } from '../types';
import Todo from './Todo';

const TodoList: React.FC = () => {
  const { loading, data } = useQuery<TODOS>(GET_ALL_TODOS);

  return (
    <Flex direction="column" mt={5}>
      {loading ? (
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      ) : (
        data?.todos.map(({ id, todo, isCompleted }) => (
          <Todo key={id} todo={todo} isCompleted={isCompleted} />
        ))
      )}
    </Flex>
  );
};
export default TodoList;
