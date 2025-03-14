import React, { useEffect } from 'react';

const BasicEffect = () => {
  useEffect(() => {
    console.log('This message prints only when the component is mounted');
  }, []); //the empty array depency causes the component to render once
  //but the message logs twice because our App2 is enclosed in Strictmode in the main.jsx
  return <div></div>;
};

export default BasicEffect;
