import { useMutation, useQuery } from '@apollo/client';
import { Flex, Skeleton, Stack } from '@chakra-ui/react';
import { DELETE_TODO } from 'graphql/mutation';
import { GET_ALL_TODOS } from 'graphql/query';
import React from 'react';

import { TODOS } from '../types';
import Todo from './Todo';

const TodoList: React.FC = () => {
  const { loading, data } = useQuery<TODOS>(GET_ALL_TODOS);
  const [deleteTodo, { error }] = useMutation(DELETE_TODO, {
    refetchQueries: [{ query: GET_ALL_TODOS }],
    awaitRefetchQueries: true,
  });

  const handleClick = async (id: string) => {
    if (error) {
      alert(error.message);
    } else {
      await deleteTodo({ variables: { id } });
    }
  };

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
          <Todo
            key={id}
            todo={todo}
            isCompleted={isCompleted}
            onClick={() => handleClick(id)}
          />
        ))
      )}
    </Flex>
  );
};
export default TodoList;
