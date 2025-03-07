import React, { useState } from 'react';

const USeState = () => {
  const styles = {
    padding: '1rem',
    margin: '2px',
  };
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div>
      <h1 style={styles}> {count}</h1>
      <button style={styles} onClick={increment}>
        <b>+</b>
      </button>
      <button style={styles} onClick={decrement}>
        <b>-</b>
      </button>
    </div>
  );
};

export default USeState;
