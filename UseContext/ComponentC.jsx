import React from 'react';
import { User } from '../App2';
const ComponentC = () => {
  return (
    <div>
      <User.Consumer>
        {(name) => {
          return <h1>{name}</h1>;
        }}
      </User.Consumer>
    </div>
  );
};

export default ComponentC;
