import { CheckIcon, DeleteIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import React from 'react';

type TodoProps = {
  todo: string;
  isCompleted: boolean;
  onDelete: () => void;
  onUpdateIsCompleted: () => void;
};

const Todo: React.FC<TodoProps> = ({
  todo,
  isCompleted,
  onDelete,
  onUpdateIsCompleted,
}) => (
  <Flex justify="space-between" mb={2} align="center">
    <Text
      fontSize="20px"
      fontWeight="bold"
      color={isCompleted ? 'gray.400' : 'black'}
    >
      {todo}
    </Text>
    <Flex align="center">
      <IconButton
        icon={<CheckIcon />}
        color={isCompleted ? 'green.500' : 'gray.400'}
        aria-label="check icon"
        onClick={onUpdateIsCompleted}
      />
      <IconButton
        icon={<DeleteIcon />}
        aria-label="delete button"
        ml={3}
        onClick={onDelete}
      />
    </Flex>
  </Flex>
);

export default Todo;
