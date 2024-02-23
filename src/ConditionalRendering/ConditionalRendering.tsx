import React from 'react';

interface ExampleProps {
  isAdmin: boolean;
  isLoggedIn: boolean;
}

const ConditionalRenderingExample: React.FC<ExampleProps> = ({ isAdmin, isLoggedIn }) => {
  return (
    <div>
      {/* Render different components based on isAdmin and isLoggedIn */}
      {isAdmin || isLoggedIn ? <p>Welcome, admin user!</p> : <p>Welcome, user!</p>}
    </div>
  );
};

export default ConditionalRenderingExample;

