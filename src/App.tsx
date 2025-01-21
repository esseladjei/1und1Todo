import { useEffect, useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Pagination from './components/Pagination';
import classes from './css/Main.module.css';
import { TodosProps } from './Types/todoTypes';

const App = () => {
  const [todos, setTodos] = useState<TodosProps[]>([
    {
      id: '',
      completed: false,
      userId: '',
      todo: ''
    }
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5; // Number of todos per page
  const total = todos.length;
  const paginatedTodos = todos.slice((currentPage - 1) * limit, currentPage * limit);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const addNewTodo = (newTodo: TodosProps) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        newTodo
      ]
    });
  }
  const handleToggle = (userId: string, completed: boolean) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.userId === userId) {
          return {
            ...todo,
            completed
          }
        }
        return todo;
      })
    })
  }
  const handleDelete = (userId: string) => {
    return setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.userId !== userId)
    })
  }
  useEffect(() => {
    (async () => {
      const response = await fetch('https://dummyjson.com/todos/');
      if (!response.ok) {
        throw new Error('An error occured');
      }
      const data = await response.json();
      const { todos } = data;
      setTodos(todos);
    })();
  }, [])
  return (
    <section className={classes.container}>
      <header className={classes.header}>
        <h1>Todo App</h1>
      </header>
      <Form addNewTodoItem={addNewTodo} />
      <TodoList todos={paginatedTodos} handleToggle={handleToggle} handleDelete={handleDelete} />
      <Pagination total={total} limit={limit} skip={(currentPage - 1) * limit} onPageChange={handlePageChange} />
    </section>

  )
}

export default App
