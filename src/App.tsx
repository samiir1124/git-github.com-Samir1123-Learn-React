import React from 'react';
import ListComponent from './Components/ListComponent';


const App: React.FC = () => {
  const items = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' }
  ];

  return (
    <div>
      <h1>List Example</h1>
      {/* Render the ListComponent and pass the list of items */}
      <ListComponent items={items} />
    </div>
  );
};

export default App;

