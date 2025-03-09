import React, { useState } from 'react';

const CopyInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [copied, setCopied] = useState('');

  const handleCopy = () => {};
  return (
    <section>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </section>
  );
};

export default CopyInput;
