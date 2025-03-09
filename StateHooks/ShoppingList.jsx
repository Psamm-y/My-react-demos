import React, { useState } from 'react';

const ShoppingList = () => {
  const [items, setItems] = useState([{ name: '', quantity: '' }]);
  const handleChange = (e) => {
    const { name, value } = e.target;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (items.name.trim()) {
      setItems((item) => {
        items.map(({ name, quantity }) => {
          name: name;
          quantity: value;
        });
      });
    }
  };
  return (
    <div>
      <h2>Shopping List</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item-name">Name: </label>
        <input
          id="item-name"
          onChange={handleChange}
          type="text"
          placeholder="Enter item"
        />{' '}
        <br />
        <label htmlFor="item-quantity">Quantity: </label>
        <input id="item-quantity" onChange={handleChange} type="number" />
      </form>
    </div>
  );
};

export default ShoppingList;
