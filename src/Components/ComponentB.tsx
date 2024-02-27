// ComponentB.tsx
import React, { useReducer } from 'react';

// Define the initial state and the reducer function
const initialState = { count: 0 };

const reducer = (state: { count: number }, action: { type: string }) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const ComponentB: React.FC = () => {
  // Use the useReducer hook to manage state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      {/* Dispatch actions to update the count */}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default ComponentB;
