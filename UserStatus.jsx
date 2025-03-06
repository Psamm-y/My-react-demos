import React from 'react';

const UserStatus = ({ loggedIn, isAdmin }) => {
  if (loggedIn && isAdmin) {
    return <h1>Welcome Admin!</h1>;
  } else {
    return <h2>Welcome User</h2>;
  }
};

export default UserStatus;
