import React, { useEffect, useState } from 'react';
//before using custom hooks (e.g.useFetch.jsx)
const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos') //fecthing the data
      .then((response) => response.json()) //change to json (JavaScript Object Notation) format
      .then((data) => setData(data)); //saving the objects acquired in the data array
  }, []);
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

export default App;
