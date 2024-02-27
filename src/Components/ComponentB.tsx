// ComponentB.tsx
import React, { useCallback, useState } from 'react';

const ComponentB: React.FC = () => {
  const [count, setCount] = useState(0);

  // Define the callback function using useCallback
  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      {/* Pass the memoized callback function to the onClick event */}
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default ComponentB;