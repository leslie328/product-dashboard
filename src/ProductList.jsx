import React from 'react';

const products = [
    { id: 1, name: 'Sofa', price: 400 },
    { id: 2, name: 'Fridge', price: 800 },
    { id: 3, name: 'Mirror', price: 70 },
];

function ProductList() {
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                         
                    </li>
                ))}
            </ul>
        </div>
    );
}
 // Use the product.id as the unique key
 <li key={product.id}>
 <ProductItem product={product} />
</li>
export default ProductList;