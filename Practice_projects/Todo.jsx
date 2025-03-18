import React, { useState } from 'react';

const Todo = () => {
  const [task, setTasks] = useState([{ task: '', completed: false }]);
  return <div>Todo</div>;
};

export default Todo;
