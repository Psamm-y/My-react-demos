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
      {data.map((post) => (
        <li key={post.id}>{post.title && post.id == 1}</li>
      ))}
    </div>
  );
};

export default FetchDataEffect;
