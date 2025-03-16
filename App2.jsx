import React, { useState } from 'react';
import { createContext } from 'react';

const App2 = () => {
  const name = 'John';

  return (
    <>
      <User.Provider value={name}>
        <ComponentB />
      </User.Provider>
    </>
  );
};

export default App2;
