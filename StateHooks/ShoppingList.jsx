import React, { useState } from 'react';

const ShoppingList = () => {
  const [items, setItems] = useState([{ name: '', quantity: '' }]);
  const handleChange = (e) => {
    const { name, value } = e.target;
  };
  return (
    <div>
      <h2>Shopping List</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder="Enter item" />
        <input onChange={handleChange} type="number" />
      </form>
    </div>
  );
};

export default ShoppingList;
