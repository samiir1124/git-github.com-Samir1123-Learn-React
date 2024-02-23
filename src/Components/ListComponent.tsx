import React from 'react';

interface ListItem {
  id: number;
  text: string;
}

interface ListProps {
  items: ListItem[];
}

const ListComponent: React.FC<ListProps> = ({ items }) => {
  return (
    <ul>
      {/* Render each item in the list */}
      {items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default ListComponent;
