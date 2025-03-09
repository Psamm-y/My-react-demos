import React, { useState } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState(['Do laundry']);
  const [inputValue, setInputValue] = useState('');
  const handleAdd = (event) => {
    const todo = event.target.value;
    setTasks(...tasks, todo);
    setInputValue('');
  };
  const handleChange = (e) => setInputValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim) {
      setTasks(...tasks, inputValue);
      setInputValue('');
    }
  };
  return (
    <section>
      <h1>Todo list</h1>
      <form onSubmit={handleSubmit} style={{ display: 'inline' }}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter Task..."
        />
      </form>
      <button>Add todo</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </section>
  );
};

export default Todo;
