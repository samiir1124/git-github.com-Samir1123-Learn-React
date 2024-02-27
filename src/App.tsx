// App.tsx
import React from 'react';
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';


const App: React.FC = () => {
  return (
    <div className="App">
      <ComponentB />
    </div>
  );
};

export default App;
