// MyContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define context
interface MyContextType {
  count: number;
  increment: () => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

// Define provider
export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <MyContext.Provider value={{ count, increment }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to consume context
export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};
