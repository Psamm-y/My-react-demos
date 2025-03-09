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
  const handleSubmit = () => {
    setUser(({ name, age }) => {
      name = nameInput;
      age = ageInput;
    });
    setNameInput('');
    setAgeInput('');
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
          type="text"
          value={ageInput}
        />
        <button>Add</button>
      </form>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default Profile;
