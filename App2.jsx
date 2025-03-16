import React, { useState } from 'react';
import { createContext } from 'react';
import ComponentA from './UseContext/ComponentA';
export const User = createContext();
const App2 = () => {
  const name = 'John';

  return (
    <>
      <User.Provider value={name}>
        <ComponentA />
      </User.Provider>
    </>
  );
};

export default App2;
