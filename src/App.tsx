// App.tsx
import React from 'react';
import ComponentA from './Components/ComponentA';
import { MyProvider } from './Components/MyContext';


const App: React.FC = () => {
  return (
    <MyProvider>
      <div>
        <h1>App</h1>
        <ComponentA />
      </div>
    </MyProvider>
  );
};

export default App;