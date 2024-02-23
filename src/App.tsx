import React from 'react';
import logo from './logo.svg';
import './App.css';
import ConditionalRendering from './ConditionalRendering/ConditionalRendering';

function App() {
  return (
    <div className="App">
      {/* Pass a prop to control the rendering of the button */}
      <ConditionalRendering showButton={true} />
    </div>
  );
}

export default App;
