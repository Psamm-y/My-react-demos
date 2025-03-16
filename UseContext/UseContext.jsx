import { createContext, useContext, useState } from 'react';

export const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'John Doe' });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
