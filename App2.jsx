// import React, { useState, createContext } from 'react';
// import { UserContext, UserProvider } from './UseContext/UserContext';
// import UserProfile from './UseContext/UserProfile';

import Todo2 from './StateHooks/Todo2';
import Counter from './UseReducer/Counter';

const App2 = () => {
  return (
    <>
      {/* <UserProvider>
        <UserProfile />
      </UserProvider> */}
      <Counter />
      <Todo2 />
    </>
  );
};

export default App2;
