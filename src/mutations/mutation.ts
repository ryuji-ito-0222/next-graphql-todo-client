import { gql } from '@apollo/client';

export const DELETE_TODO = gql`
  mutation($id: String!) {
    deleteTodo(id: $id) {
      todo
      isCompleted
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation($id: String!, $todo: String, $isCompleted: boolean) {
    updateTodo(id: $id, todo: $todo, isCompleted: $isCompleted) {
      todo
      isCompleted
    }
  }
`;
