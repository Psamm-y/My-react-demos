import React, { useState } from 'react';

const Switcher = () => {
  const [sw, setSw] = useState(false);
  return (
    <div>
      {sw ? (
        <span style={{ backgroundColor: 'black', color: 'white' }}>Dark</span>
      ) : (
        <span>Light</span>
      )}

      <input type="text" key={sw ? 'dark' : 'light'} />
      <button onClick={() => setSw((s) => !s)}>Switch</button>
    </div>
  );
};

export default Switcher;
