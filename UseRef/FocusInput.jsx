import React, { useRef } from 'react';

const FocusInput = () => {
  const inputField = useRef(null);

  const focusHandler = () => {
    input.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputField} />
      <button onClick={focusHandler}>Focus</button>
    </div>
  );
};

export default FocusInput;
