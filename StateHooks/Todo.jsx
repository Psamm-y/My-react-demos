import React, { useState } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState(['Do laundry']);
  const [inputValue,setInputValue]= useState("")
  const handleAdd = (event) => {
    setTasks(event.target.value)
    setInputValue("");
  };
  return (
    <section>
      <h1>Todo list</h1>
      <form onSubmit={ }>
              <input type="text" value={tasks} placeholder='Add todo'/>

      </form>
      <button onClick={handleAdd}>Add todo</button>
      <ul>
          {tasks.map((t,index) => (
        <li key={index}>{t}</li>
      ))}
      </ul>
    
    </section>
  );
};

export default Todo;
