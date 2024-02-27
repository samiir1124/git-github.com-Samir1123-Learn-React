// ComponentA.tsx
import React, { useState, useEffect, useContext, useRef } from 'react';
import { MyContext } from './MyContext';

const ComponentA: React.FC = () => {
  // useState
  const [count, setCount] = useState<number>(0);

  // useEffect
  useEffect(() => {
    console.log('ComponentA mounted');
    // Cleanup function
    return () => {
      console.log('ComponentA will unmount');
    };
  }, []);

  // useContext
  const contextValue = useContext(MyContext);

  // useRef
  const inputRef = useRef<HTMLInputElement>(null);

  // Function to handle button click
  const handleClick = () => {
    // Check if the inputRef is not null
    if (inputRef.current) {
      // Focus on the input element when the button is clicked
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h1>useState: {count}</h1>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>

      <h1>useEffect</h1>
      {/* useEffect will log messages in the console */}

      <h1>useContext: {contextValue}</h1>
      {/* Context value from MyContext provider */}

      <h1>useRef</h1>
      <input type="text" ref={inputRef} />
      {/* inputRef points to the input element */}
      {/* Button to trigger focus on the input */}
      <button onClick={handleClick}>Focus on Input</button>
    </div>
  );
};

export default ComponentA;