import { UserProvider, UserContext } from './UserContext';
import React, { useContext } from 'react';

const UserProfile = () => {
  const { user } = useContext(UserContext);
  useContext(UserContext);
  return <div>UserProfile</div>;
};

export default UserProfile;
