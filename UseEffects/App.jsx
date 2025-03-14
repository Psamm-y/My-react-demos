import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }
    getData();
  }, []);
  return (
    <div>
      <ul>
        {data.map((todo) => (
          <section key={todo.id}>
            <li style={{ color: 'purple' }}>{todo.title}</li>
            <p>{todo.body}</p>
          </section>
        ))}
      </ul>
    </div>
  );
};

export default App;
