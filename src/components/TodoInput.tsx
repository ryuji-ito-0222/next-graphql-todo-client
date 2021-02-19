import { useMutation } from '@apollo/client';
import { AddIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Input, Text } from '@chakra-ui/react';
import { ADD_TODO } from 'graphql/mutation';
import { GET_ALL_TODOS } from 'graphql/query';
import React, { useState } from 'react';
import { TODO } from 'types';

const TodoInput: React.FC = () => {
  const [input, setInput] = useState('');
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
    <>
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
    </>
  );
};
export default TodoInput;
