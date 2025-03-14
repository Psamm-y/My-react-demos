import React, { useEffect, useState } from 'react';

const FetchDataEffect = () => {
  const [data, setData] = useState([]);
  async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    if (data && data.length) setData(data);
  }
  useEffect(() => {});
  return <div>FetchDataEffect</div>;
};

export default FetchDataEffect;
