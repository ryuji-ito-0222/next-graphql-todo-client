import { gql } from '@apollo/client';

export const GET_ALL_TODOS = gql`
  {
    todos {
      id
      todo
      isCompleted
    }
  }
`;
