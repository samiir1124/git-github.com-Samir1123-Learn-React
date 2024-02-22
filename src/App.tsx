import React from 'react';
import Button from './Components/ButtonComponent';

const App: React.FC = () => {
  // Event handlers for App.tsx
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className="App">
      <Button onClick={handleClick} />
    </div>
  );
};

export default App;