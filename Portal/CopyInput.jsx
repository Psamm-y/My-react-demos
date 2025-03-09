import React, { useState } from 'react';
import PopupContent from './PopupContent.jsx';
const CopyInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      //the function in the .then() will execute after the value has been copied successfully
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000); //sets the copied state variable back to false after 2 seconds i.e. 2000 milliseconds
    });
    setInputValue('');
  };
  return (
    <section style={{ position: 'relative', height: '30rem' }}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleCopy}>Copy</button>
      <PopupContent copied={copied} />
    </section>
  );
};

export default CopyInput;
