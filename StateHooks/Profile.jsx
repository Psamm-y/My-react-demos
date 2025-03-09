import React, { useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState({ name: '', age: 5 });
  const [nameInput, setnameInput] = useState('');
  const [ageInput, setAgeInput] = useState('');
  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input id="name" type="text" value={nameInput} />
        <label htmlFor="age"></label>
        <input id="age" type="text" value={ageInput} />
      </form>
    </div>
  );
};

export default Profile;
