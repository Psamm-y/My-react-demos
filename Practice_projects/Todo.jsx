import React, { useState } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState([{ text: '', completed: false }]);
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    setTasks(({ todo }) => [{ ...todo, text: inputValue }]);
    setInputValue('');
  };
  return (
    <>
      <h2>My Todo List App</h2>
      <input type="text" onChange={handleInput} value={inputValue} />
      <button onClick={handleAddTodo}>Add todo</button>
      {tasks.text ? tasks.map((todo) => <li>{todo.text}</li>) : ''}
    </>
  );
};

export default Todo;
