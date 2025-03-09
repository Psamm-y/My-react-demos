import React, { useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState({ name: '', age: 5 });
  const [nameInput, setNameInput] = useState('');
  const [ageInput, setAgeInput] = useState('');

  const handleNameChange = (e) => {
    setNameInput(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAgeInput(e.target.input);
  };
  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          onChange={handleNameChange}
          id="name"
          type="text"
          value={nameInput}
        />
        <label htmlFor="age"></label>
        <input
          onChange={handleAgeChange}
          id="age"
          type="text"
          value={ageInput}
        />
      </form>
    </div>
  );
};

export default Profile;
