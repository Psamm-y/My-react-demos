import React from 'react';

const List = () => {
  const numbers = [1, 2, 3, 4, 5];
  const userInfo = [
    {
      name: 'Samuel',
      level: 200,
      school: 'UG',
    },
    {
      name: 'Kobby',
      level: 300,
      school: 'UPSA',
    },
    {
      name: 'David',
      level: 100,
      school: 'UG',
    },
  ];
  return (
    <main>
      {numbers.map((number) => (
        <ul key={number}>
          <li>Number: {number}</li>
        </ul>
      ))}

      {userInfo.map(({ name, school, level }) => (
        <li key={level}>
          Username: {name}, a level {level} in {school}
        </li>
      ))}
    </main>
  );
};

export default List;
