import React, { useState, createContext } from 'react';
import { UserContext } from './UseContext/UserContext';
import UserProfile from './UseContext/UserProfile';
const App2 = () => {
  const name = 'John';
  const age = 20;
  return (
    <>
      <UserContext.Provider>
        <UserProfile />
      </UserContext.Provider>
    </>
  );
};

export default App2;
