// ComponentB.tsx
import React, { useMemo } from 'react';

const ComponentB: React.FC = () => {
  // Define two numbers to sum
  const num1 = 10;
  const num2 = 20;

  // Calculate the sum using useMemo
  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return num1 + num2;
  }, [num1, num2]); // Depend on num1 and num2

  return (
    <div>
      <h2>Sum: {sum}</h2>
    </div>
  );
};

export default ComponentB;
