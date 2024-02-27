import React from 'react';

const MyComponent: React.FC = () => {
  // Intentionally throw an error to test error handling
  throw new Error('An error occurred in MyComponent');

  return (
    <div>
      <h2>My Component</h2>
      <p>This is the content of MyComponent.</p>
    </div>
  );
};

export default MyComponent;
