import React, { useState } from 'react';
import './Todo.css';
import { FcTodoList } from 'react-icons/fc';
const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    inputValue.trim() ? setTasks([...tasks, { text: inputValue }]) : tasks.text;

    setInputValue('');
  };
  return (
    <div className="todo-block tod">
      <h2>
        <FcTodoList style={{ color: 'yellow' }} />
        My Todo List App
      </h2>
      <form>
        <input type="text" onChange={handleInput} value={inputValue} />
        <button onClick={handleAddTodo}>Add todo</button>
      </form>

      {tasks.map((todo, index) => (
        <li key={index}>{todo.text}</li>
      ))}
    </div>
  );
};

export default Todo;
