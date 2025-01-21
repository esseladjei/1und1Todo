import Button from './Button';
import { TodoItemProps } from '../Types/todoTypes';
import classes from '../css/TodoItem.module.css';
const TodoItem = ({ completed, userId, id, todo, handleToggle, handleDelete }: TodoItemProps) => {
  return (
    <>
      <li key={id}>
        <label>{todo}</label>
        <input type="checkbox" name='completed' checked={completed} onChange={(e) => handleToggle(userId, e.target.checked)} />
        <div className={classes.deleteButton}>
          <Button title='Delete' onClick={() => handleDelete(userId)} />
        </div>

      </li>
    </>
  )
}

export default TodoItem