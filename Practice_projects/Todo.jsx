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

    inputValue.trim()
      ? setTasks([...tasks, { text: inputValue, completed: false }])
      : tasks.text;

    setInputValue('');
  };

  const toggleCompleted = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((todo, i) =>
        i === index ? { ...todo, completed: !completed } : todo
      )
    );
  };
  return (
    <div className="todo-block tod">
      <h2>
        <FcTodoList style={{ color: 'yellow' }} />
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

      {tasks.map((todo, index) => (
        <ul key={index}>
          <li className={tasks.completed ? 'completed' : ''}>
            <input type="checkbox" onChange={() => toggleCompleted(index)} />
            {todo.index} {todo.text}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Todo;
