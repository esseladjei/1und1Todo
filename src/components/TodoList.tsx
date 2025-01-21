import TodoItem from './TodoItem';
import NoResults from './NoResults';
import { TodoListProps } from '../Types/todoTypes';
import classes from '../css/TodoList.module.css';
const TodoList = ({ todos, handleToggle, handleDelete }: TodoListProps) => {
  return (
    <section className={classes.todos}>
      <ul>
        {todos.length === 0 && <NoResults message='No todos available' />}
        {
          todos.length && todos.map((todoItem) => (
            <TodoItem key={todoItem.id} {...todoItem} handleDelete={handleDelete} handleToggle={handleToggle} />
          ))}
      </ul>
    </section>
  )
}

export default TodoList