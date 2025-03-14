import React, { useState } from 'react';
import CounterEffect from './UseEffects/COunterEffect';
const App2 = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <CounterEffect />
    </>
  );
};

export default App2;
