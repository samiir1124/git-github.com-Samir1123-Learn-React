import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Components/Greeting';
import Product from './Components/Products';
import MyComponent from './Components/MyComponent';

function App() {
  return (
    <div className="App">
      {/* Calling the Greeting component */}
      {/* <Greeting name="Alice" />
      <Product product_name="Laptop" /> */}
      <MyComponent name="John" age={25} /> // Valid
    </div>
  );
}

export default App;
