// CrudApiComponent.tsx
import React, { useState, useEffect } from 'react';

const CrudApiComponent: React.FC = () => {
  // Simulated JSON dataset
  const [data, setData] = useState<any[]>([]);

  // Function to fetch data (simulated async call)
  const fetchData = () => {
    // Simulate fetching data asynchronously
    setTimeout(() => {
      const jsonData = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
      ];
      setData(jsonData);
    }, 1000);
  };

  // Function to add new item
  const addItem = () => {
    const newItem = { id: data.length + 1, name: `New Item ${data.length + 1}` };
    setData(prevData => [...prevData, newItem]);
  };

  // Function to update item
  const updateItem = (id: number, newName: string) => {
    setData(prevData =>
      prevData.map(item => (item.id === id ? { ...item, name: newName } : item))
    );
  };

  // Function to delete item
  const deleteItem = (id: number) => {
    setData(prevData => prevData.filter(item => item.id !== id));
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>CRUD API Example</h1>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => updateItem(item.id, `Updated ${item.name}`)}>Update</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudApiComponent;
