import React, { useState } from 'react';
import { createContext } from 'react';
import ComponentA from './UseContext/ComponentA';
export const User = createContext();
export const User1 = createContext();
const App2 = () => {
  const name = 'John';
  const age = 20;
  return (
    <>
      <User.Provider value={name}>
        <ComponentA />
      </User.Provider>
    </>
  );
};

export default App2;
