import { CheckIcon, TimeIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

type TodoProps = {
  todo: string;
  completed: boolean;
};

const Todo: React.FC<TodoProps> = ({ todo, completed = false }) => (
  <Flex justify="space-between">
    <Text>{todo}</Text>
    <Text>{completed ? <CheckIcon /> : <TimeIcon />}</Text>
  </Flex>
);

export default Todo;
