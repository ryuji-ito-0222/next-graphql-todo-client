import { CheckIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

type TodoProps = {
  todo: string;
  isCompleted: boolean;
};

const Todo: React.FC<TodoProps> = ({ todo, isCompleted }) => (
  <Flex justify="space-between" mb={2}>
    <Text fontSize="20px" fontWeight="bold">
      {todo}
    </Text>
    {isCompleted ? <CheckIcon /> : <Text>Not Done</Text>}
  </Flex>
);

export default Todo;
