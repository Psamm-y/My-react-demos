import React, { createContext } from 'react';

import ComponentB from './ComponentB';
import { createPortal } from 'react-dom';
import ComponentC from './ComponentC';
export const User = createContext();
const ComponentA = () => {
  const name = 'John';
  return (
    <>
      <User.Provider value={name}>
        <ComponentA />
      </User.Provider>
    </>
  );
};

export default ComponentA;
