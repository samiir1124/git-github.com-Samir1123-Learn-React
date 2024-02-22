import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode; // Define the children prop
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
    // Inline Event Handler, Method Binding, Arrow Function (in class Components)
  const handle_Inline_MethodBinding_ArrowFunction_Click = () => {
    console.log('Inline, Method binding,Arrow function  event handler called');
    onClick();
  }; 

  // Passing Parameters to Event Handlers
  const handleParameterizedClick = (param: string) => {
    console.log(`Event handler with parameter ${param} called`);
    onClick();
  };

  // Synthetic Events
  const handleSyntheticEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Synthetic event handler called');
    onClick();
  };

  // Prevent Default Behaviour and Stop Propagation
  const handlePreventDefault = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Prevent default event handler called');
    event.preventDefault();
  };

  const handleStopPropagation = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Stop propagation event handler called');
    event.stopPropagation();
  };

  return (
    <div>
      <button onClick={handle_Inline_MethodBinding_ArrowFunction_Click}>Handlers</button>      
      <button onClick={() => handleParameterizedClick('param')}>Passing Parameters</button>
      <button onClick={handleSyntheticEvent}>Synthetic Events</button>
      <button onClick={handlePreventDefault}>Prevent Default</button>
      <button onClick={handleStopPropagation}>Stop Propagation</button>
    </div>
  );
};

export default Button;
