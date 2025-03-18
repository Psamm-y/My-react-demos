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

  const toggleCompleted = (index) => {
    setTasks((prevTask) =>
      prevTasks.map((todo, i) =>
        i === index ? [...todo, { completed: !completed }] : todo
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
        <section key={index}>
          <li>
            <input type="checkbox" />
            {todo.index} {todo.text}
          </li>
        </section>
      ))}
    </div>
  );
};

export default Todo;
