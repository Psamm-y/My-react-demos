import React, { useState } from 'react';

const Switcher = () => {
  const [sw, setSw] = useState(false);
  return (
    <div>
      <input type="text" key={sw ? 'dark' : 'light'} />
      <button>Switch</button>
    </div>
  );
};

export default Switcher;
