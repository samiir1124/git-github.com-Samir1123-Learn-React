import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Components/Greeting';
import Product from './Components/Products';
import MyComponent from './Components/MyComponent';
import Counter from './Components/CounterState';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
