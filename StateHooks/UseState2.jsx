import React, { useState } from 'react';

const UseState2 = () => {
  const [friends, setFriends] = useState(['Psammy', 'Alladin']);

  return (
    <section>
      {friends.map((f) => (
        <li>{f}</li>
      ))}

      <button onClick={addFriend}>Add friend</button>
      <button>Remove friend</button>
      <button>Update friend</button>
    </section>
  );
};

export default UseState2;
