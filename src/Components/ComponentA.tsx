// ComponentA.tsx
import React from 'react';
import { useMyContext } from './MyContext';

const ComponentA: React.FC = () => {
  const { count, increment } = useMyContext();

  return (
    <div>
      <h2>Component A</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default ComponentA;