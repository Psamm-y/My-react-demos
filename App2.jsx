import React, { useState, createContext } from 'react';
import { UserContext, UserProvider } from './UseContext/UserContext';
import UserProfile from './UseContext/UserProfile';
const App2 = () => {
  const name = 'John';
  const age = 20;
  return (
    <>
      <UserProvider>
        <UserProfile />
      </UserProvider>
    </>
  );
};

export default App2;
