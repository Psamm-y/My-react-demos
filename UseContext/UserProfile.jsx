import { UserProvider, UserContext } from './UserContext';
import React, { useContext } from 'react';

const UserProfile = () => {
  useContext(UserContext);
  return <div>UserProfile</div>;
};

export default UserProfile;
