import { useMutation, useQuery } from '@apollo/client';
import { Flex, Skeleton, Stack } from '@chakra-ui/react';
import { DELETE_TODO, UPDATE_TODO } from 'graphql/mutation';
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
  const [updateTodo] = useMutation(UPDATE_TODO, {
    refetchQueries: [{ query: GET_ALL_TODOS }],
    awaitRefetchQueries: true,
  });

  const handleDelete = async (id: string) => {
    if (error) {
      alert(error.message);
    } else {
      await deleteTodo({ variables: { id } });
    }
  };

  const handleUpdate = async ({
    id,
    todo,
    isCompleted,
  }: {
    id: string;
    todo: string;
    isCompleted: boolean;
  }) => {
    await updateTodo({ variables: { id, todo, isCompleted: !isCompleted } });
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
            onDelete={() => handleDelete(id)}
            onUpdateIsCompleted={() => handleUpdate({ id, todo, isCompleted })}
          />
        ))
      )}
    </Flex>
  );
};
export default TodoList;
