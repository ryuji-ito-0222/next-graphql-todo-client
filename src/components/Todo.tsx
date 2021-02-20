import { CheckIcon, DeleteIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import React from 'react';

type TodoProps = {
  todo: string;
  isCompleted: boolean;
  onClick: () => void;
};

const Todo: React.FC<TodoProps> = ({ todo, isCompleted, onClick }) => (
  <Flex justify="space-between" mb={2} align="center">
    <Text fontSize="20px" fontWeight="bold">
      {todo}
    </Text>
    <Flex align="center">
      {isCompleted ? <CheckIcon /> : <Text>Not Done</Text>}
      <IconButton
        icon={<DeleteIcon />}
        aria-label="delete button"
        ml={3}
        onClick={onClick}
      />
    </Flex>
  </Flex>
);

export default Todo;
