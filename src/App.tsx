import React from 'react';
import logo from './logo.svg';
import './App.css';
import ConditionalRendering from './ConditionalRendering/ConditionalRendering';

function App() {
  return (
    <div className="App">
      {/* Pass a prop to control the rendering of message */}
      <ConditionalRendering isAdmin={false} isLoggedIn={true} />
    </div>
  );
}

export default App;
