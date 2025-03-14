//UseEffect with Dependencies
import React, { useEffect, useState } from 'react';

const CounterEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Increment ${count}`;
  }, [count]);
  return (
    <div>
      <p style={{ fontSize: '2rem' }}>
        <b>{count}</b>
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default CounterEffect;
