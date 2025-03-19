import React from 'react';
//after using custom hooks (i.e. useFetch)
import useFetch from './useFetch';
const App2 = () => {
  const [data] = useFetch('https://jsonplaceholder.typicode.com/todos');
  //destructuring the data array returned by useFetch.jsx
  return (
    <div>
      {data && //to make sure data was fetched before any other thing
        data.map(
          (
            item //let each item in the data array be called 'item'
          ) => (
            <p key={item.id}>
              {item.id}. &nbsp;{item.title} <br /> <br />
              {/*item is an object with title and id as properties*/}
            </p>
          )
        )}
    </div>
  );
};

export default App2;
