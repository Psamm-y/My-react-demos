import React from 'react';

const ProductInfo = () => {
  const product = {
    name: 'Computer',
    price: 1200,
    availability: 'In-stock',
  };
  return (
    <div>
      <h4>Product Detials</h4>
      <li>Product name: {product.name}</li>
      <li>Price: ${product.price} </li>
      <li>Availability: {product.availability}</li>
    </div>
  );
};

export default ProductInfo;
