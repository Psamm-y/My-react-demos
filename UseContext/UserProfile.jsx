import React from 'react';
import { useContext } from 'react';
import { UserContext } from './UserContext';
const UserProfile = () => {
  const user = useContext(UserContext);
  return <div>UserProfile</div>;
};

export default UserProfile;
