import React, { useState } from 'react';

const Todo2 = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput('');
    }
  };

  //function to toggle copleted between true or false
  const toggleComplete = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
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
        <li
          style={{
            listStyle: 'none',
            textDecoration: todo.completed ? 'line-through' : 'none',
          }}
          key={index}
        >
          <input
            onChange={() => toggleComplete(index)}
            type="checkbox"
            checked={todo.completed}
          />
          {todo.text}
        </li>
      ))}
    </section>
  );
};

export default Todo2;
