import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'John Doe' });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
export { UserContext, UserProvider };
