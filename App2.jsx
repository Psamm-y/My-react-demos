import React, { useState } from 'react';
import Profile from './StateHooks/Profile';
const App2 = () => {
  const [user, setUser] = useState({ name: '', age: 5 });
  return (
    <>
      <Profile />
    </>
  );
};

export default App2;
