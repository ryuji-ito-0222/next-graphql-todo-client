import { CheckIcon, TimeIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

type TodoProps = {
  todo: string;
  isCompleted: boolean;
};

const Todo: React.FC<TodoProps> = ({ todo, isCompleted }) => (
  <Flex justify="space-between">
    <Text>{todo}</Text>
    <Text>{isCompleted ? <CheckIcon /> : <TimeIcon />}</Text>
  </Flex>
);

export default Todo;
