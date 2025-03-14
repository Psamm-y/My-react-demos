import React, { useEffect, useState } from 'react';

const FetchDataEffect = () => {
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
      {data
        .filter((post) => post.id == 1)
        .map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
    </div>
  );
};

export default FetchDataEffect;
