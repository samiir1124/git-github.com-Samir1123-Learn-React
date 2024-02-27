import React from 'react';
import ErrorBoundary from './Components/ErrorBoundary';
import MyComponent from './Components/MyComponent';


const App: React.FC = () => {
  return (
    <div>
      <h1>My App</h1>
      <ErrorBoundary>
        <MyComponent />
      </ErrorBoundary>
    </div>
  );
};

export default App;
