import React, { useState } from 'react';

const Todo2 = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };
  const removeTask = (index) => {
    setTodos((todo) => todo.filter((_, i) => i !== index));
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <section>
      <h1>My Todo-List App</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          value={input}
          placeholder="Enter a task..."
        />
        <button>Add todo</button>
      </form>

      {todos.map((todo, index) => (
        <li onClick={() => removeTask(index)} key={index}>
          {todo}
        </li>
      ))}
    </section>
  );
};

export default Todo2;
