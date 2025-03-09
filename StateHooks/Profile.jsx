import React, { useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState({ name: '', age: 5 });
  const [nameInput, setNameInput] = useState('');
  const [ageInput, setAgeInput] = useState('');

  const handleNameChange = (e) => {
    setNameInput(e.target.value);
    setUser((prev) => ({ ...prev, name: nameInput }));
  };
  const handleAgeChange = (e) => {
    setAgeInput(e.target.value);
    setUser((prev) => ({ ...prev, age: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameInput.trim() && ageInput > 0) {
      setUser({
        name: nameInput,
        age: ageInput,
      });
      setNameInput('');
      setAgeInput('');
    }
  };
  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          onChange={handleNameChange}
          id="name"
          type="text"
          value={nameInput}
        />{' '}
        <br />
        <label htmlFor="age">Age: </label>
        <input
          onChange={handleAgeChange}
          id="age"
          type="number"
          value={ageInput}
        />
        <button type="submit">Add</button>
      </form>
      <div>
        <h2>User info:</h2>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
      </div>
    </div>
  );
};

export default Profile;
