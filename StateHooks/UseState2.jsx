// import React, { useState } from 'react';

// const UseState2 = () => {
//   const [friends, setFriends] = useState(['Psammy', 'Alladin']);

//   const addFriend = () => {
//     setFriends([...friends, 'Ampadu']);
//   };

//   const removefriend = () => {
//     setFriends(friends.filter((f) => f !== 'Samuel Ampadu'));
//   };

//   const updateFriend = () =>
//     setFriends(friends.map((f) => (f === 'Ampadu' ? 'Samuel Ampadu' : f)));
//   return (
//     <section>
//       {friends.map((f) => (
//         <li key={Math.random() * 10}>{f}</li>
//       ))}

//       <button onClick={() => addFriend()}>Add friend</button>
//       <button onClick={removefriend}>Remove friend</button>
//       <button onClick={updateFriend}>Update friend</button>
//     </section>
//   );
// };

// export default UseState2;

// import React, { useState } from 'react';

// const UseState2 = () => {
//   const [movie, setMovie] = useState({
//     title: 'The Forge',
//     ratings: 9.9,
//   });

//   const handeClick = () => setMovie({ ...movie, ratings: 10 });
//   return (
//     <section>
//       <h3>Title: {movie.title}</h3>
//       <p>Ratings: {movie.ratings}</p>
//       <button onClick={handeClick}>Change rating</button>
//     </section>
//   );
// };

// export default UseState2;

import React from 'react';

const UseState2 = () => {
  return <section>UseState2</section>;
};

export default UseState2;
