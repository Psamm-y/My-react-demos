import React from 'react';

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Phone',
      price: 699,
    },
    {
      id: 2,
      name: 'Laptop',
      price: 1200,
    },
    {
      id: 1,
      name: 'Headphones',
      price: 199,
    },
  ];
  return (
    <>
      {products.map(({ id, name, price }) => (
        <div>
          <li>Product Name: {name}</li>
          <li>Price: {price}</li>
        </div>
      ))}
    </>
  );
};

export default ProductList;
