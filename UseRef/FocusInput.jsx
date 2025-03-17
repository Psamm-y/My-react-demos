import React, { useRef } from 'react';

const FocusInput = () => {
  const inputField = useRef(null);

  const focusHandler = () => {
    inputField.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputField} placeholder="Click button to focus" />
      <button onClick={focusHandler}>Focus</button>
    </div>
  );
};

export default FocusInput;
