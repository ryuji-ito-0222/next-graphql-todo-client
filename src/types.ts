export type TODO = {
  id: string;
  todo: string;
  isCompleted: boolean;
};

export type TODOS = {
  todos: TODO[];
};
