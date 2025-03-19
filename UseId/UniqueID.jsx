import React, { useId } from 'react';

const UniqueID = () => {
  const id = useId();
  return (
    <div>
      <label htmlFor={`${id} - email`}>Email</label>
      <input type="email" id={`${id} - email`} />
    </div>
  );
};

export default UniqueID;
