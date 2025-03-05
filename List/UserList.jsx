import React from 'react';

const UserList = () => {
  const users = [
    {
      id: 1,
      name: 'Alice',
      age: 25,
    },
    {
      id: 2,
      name: 'Bob',
      age: 30,
    },
    {
      id: 3,
      name: 'Charlie',
      age: 22,
    },
  ];
  return (
    <>
      {users.map(({ id, name, age }) => (
        <div key={id}>
          <li>Name: {name}</li>
          <li>Age: {age}</li>
        </div>
      ))}
    </>
  );
};

export default UserList;
