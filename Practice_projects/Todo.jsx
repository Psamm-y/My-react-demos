import React, { useState } from 'react';
import './Todo.css';
import { FcTodoList } from 'react-icons/fc';
import { ImBin } from 'react-icons/im';
const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    inputValue.trim()
      ? setTasks([...tasks, { text: inputValue, completed: false }])
      : tasks.text;

    setInputValue('');
  };

  const toggleCompleted = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleRemove = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };
  return (
    <div className="todo-block tod">
      <div className="fixed">
        <h2>
          <FcTodoList />
          My Todo List App
        </h2>
        <form>
          <input
            type="text"
            onChange={handleInput}
            value={inputValue}
            placeholder="Enter a task..."
          />
          &nbsp;<button onClick={handleAddTodo}>Add todo</button>
        </form>
      </div>

      {tasks.map((todo, index) => (
        <ul key={index}>
          <li className={todo.completed ? 'completed' : ''}>
            <input type="checkbox" onChange={() => toggleCompleted(index)} />{' '}
            &nbsp;
            {todo.text}
          </li>
          <span onClick={() => handleRemove(index)}>
            <ImBin />
          </span>
        </ul>
      ))}
    </div>
  );
};

export default Todo;
