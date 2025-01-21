import React, { useState } from 'react'
import Button from './Button';
import classes from '../css/Form.module.css';
import { TodosProps, FormProps } from '../Types/todoTypes';

const Form: React.FC<FormProps> = ({ addNewTodoItem }) => {
  const [todoItem, setTodoItem] = useState<string>('');
  const saveTodo = async (todos: TodosProps) => {
    const response = await fetch('https://dummyjson.com/todos/SOMEPOSTPATH', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ todos })
    })
    if (!response.ok) {
      throw new Error('An error occured');
    }
    const data = await response.json();
    console.log(data)
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoItem(event.target.value)
  }
  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!todoItem) {
      return;
    }
    const newTodo: TodosProps = {
      id: Math.random().toString(),
      todo: todoItem,
      completed: false,
      userId: Math.random().toString(),
    }
    addNewTodoItem(newTodo);
    try {
      await saveTodo(newTodo);
      console.log('Todo saved successfully');
      setTodoItem('');
    } catch (error) {
      console.error('Failed to save the todo:', error);
    }
  }
  return (
    <section className={classes.todoForm}>
      <form>
        <div className={classes.formControl}>
          <label htmlFor="todos" className={classes.label}>Todos</label>
          <input className={classes.inputText} type="text" id="todos" name="todos" value={todoItem} onChange={handleChange} />
          <div className={classes.formActions}>
            <Button title='Add Todo' onClick={handleSubmit} />
          </div>

        </div>
      </form>
    </section>
  )
}

export default Form