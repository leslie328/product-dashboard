import React, { useState } from 'react';

const App = () => {
    {id: 1, name: 'Sofa', price:400, description: 'unpholestered seat featuring aems and a back.'}
    {id: 2, name: 'Fridge', price:800, description: 'a silver steel electronic refrigerator'}
    {id: 3, name: 'Mirror', price:70, description: 'Made with premium materials, the frame ensures longevity and elegance'}
  const [products, setProducts] = useState(Products);
};


const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]); 
  };
  return (
    <div>
      <h1>Product Form</h1>
      <ProductList products={products} />
      <AddProductForm addProduct={addProduct} />
  );
