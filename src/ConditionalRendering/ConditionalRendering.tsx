import React, { useState } from 'react';

const ConditionalRenderingExample: React.FC = () => {
  // Define state to toggle rendering
  const [isVisible, setIsVisible] = useState<boolean>(true);

  // Toggle visibility state
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Toggle Visibility</button>
      {/* Conditional rendering based on isVisible state */}
      {isVisible ? <p>Content is visible</p> : <p>Content is hidden</p>}
    </div>
  );
};

export default ConditionalRenderingExample;
