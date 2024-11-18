import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// code created to import information from files.

function App() {
  const [products, setProducts] = useState([
    {id: 1, name: 'Sofa', price:400, description: 'unpholestered seat featuring aems and a back.'}
    {id: 2, name: 'Fridge', price:800, description: 'a silver steel electronic refrigerator'}
    {id: 3, name: 'Mirror', price:70, description: 'Made with premium materials, the frame ensures longevity and elegance'}
  ]);
}
const addProduct = (newProduct) => {
  set products([...products, newProduct]);
};
return (
  <div>
    <h1> Product Dashboard</h1>
    <ProductList products={products} />
  </div>
)

export default App
