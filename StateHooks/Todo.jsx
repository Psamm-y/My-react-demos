import React, { useState } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState(['Do laundry']);
  const [inputValue,setInputValue]= useState("")
  const handleAdd = (event) => setTasks(event.target.value);
  return (
    <section>
      <h1>Todo list</h1>
      <form onSubmit={ }>
              <input type="text" value={tasks} />

      </form>
      <button onClick={handleAdd}>Add todo</button>
      {tasks.map((t) => (
        <li>{t}</li>
      ))}
    </section>
  );
};

export default Todo;
