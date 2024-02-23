import React from 'react';
// Ensure that the correct path to DatePicker component is provided

interface ConditionalRenderingExampleProps {
  showButton: boolean; // Define the prop type
}

const ConditionalRenderingExample: React.FC<ConditionalRenderingExampleProps> = ({ showButton }) => {
  return (
    <div>
      {/* Conditionally render the button based on the prop */}
      {showButton && <button>Click Me</button>}
      {/* Conditionally render the input based on the negation of the prop */}
      {!showButton && <input type="text" placeholder="Enter Date" />}
    </div>
  );
};

export default ConditionalRenderingExample;

