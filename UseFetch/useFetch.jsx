import React from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos') //fecthing the data
      .then((response) => response.json()) //change to json (JavaScript Object Notation) format
      .then((data) => setData(data)); //saving the objects acquired in the data array
  }, []);
  return [data];
};

export default useFetch;
