import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Components/Greeting';
import Product from './Components/Products';

function App() {
  return (
    <div className="App">
      {/* Calling the Greeting component */}
      <Greeting name="Alice" />
      <Product product_name="Laptop" />
    </div>
  );
}

export default App;
