// import React, { useState, createContext } from 'react';
// import { UserContext, UserProvider } from './UseContext/UserContext';
// import UserProfile from './UseContext/UserProfile';

import Counter from './UseReducer/Counter';
import FocusInput from './UseRef/FocusInput';

const App2 = () => {
  return (
    <>
      {/* <UserProvider>
        <UserProfile />
      </UserProvider> */}

      <FocusInput />
    </>
  );
};

export default App2;
