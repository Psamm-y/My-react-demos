import React, { useState } from 'react';

const CopyInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      setCopied(true);
      setTimeout(setCopied(false, 2000)); //sets the copied state variable back to false after 2 second i.e. 2000 milliseconds
    });
    setInputValue('');
  };
  return (
    <section>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleCopy}>Copy</button>
    </section>
  );
};

export default CopyInput;
