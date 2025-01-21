export interface TodoListProps {
  todos: TodosProps[];
  handleToggle: (userId: string, completed: boolean) => void;
  handleDelete: (userId: string) => void;
}
export interface TodosProps {
  id: string;
  completed: boolean;
  userId: string;
  todo: string;
}
export interface TodoItemProps {
  completed: boolean;
  userId: string;
  id: string;
  todo: string;
  handleToggle: (userId: string, completed: boolean) => void;
  handleDelete: (userId: string) => void;
}

export interface PaginationProps {
  total: number;
  limit: number;
  skip: number;
  onPageChange: (page: number) => void;
}


export interface FormProps {
  addNewTodoItem: (todo: TodosProps) => void;
}
