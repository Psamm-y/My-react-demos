import React, { useState } from 'react';
import FetchDataEffect from './UseEffects/FetchDataEffect';
const App2 = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <FetchDataEffect />
    </>
  );
};

export default App2;
