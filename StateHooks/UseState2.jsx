import React, { useState } from 'react';

const UseState2 = () => {
  const [friends, setFriends] = useState(['Psammy', 'Alladin']);

  const addFriend = () => {
    setFriends([...friends, 'Ampadu']);
  };

  const removefriend = () => {
    setFriends(friends.filter((f) => f !== 'Ampadu'));
  };
  return (
    <section>
      {friends.map((f) => (
        <li key={Math.random() * 10}>{f}</li>
      ))}

      <button onClick={() => addFriend()}>Add friend</button>
      <button onClick={removefriend}>Remove friend</button>
      <button>Update friend</button>
    </section>
  );
};

export default UseState2;
