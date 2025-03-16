import { createContext, useContext, useState } from 'react';

export const UserContext = createContext();
UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'John Doe' });
};
