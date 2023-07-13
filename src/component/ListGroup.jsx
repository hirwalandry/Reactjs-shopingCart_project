import React from 'react';

function ListGroup({ items, itemSelect, onItemSelect }) {
  return (
    <ul>
      {items.map((item) => (
        <li
          className={`py-4  text-center cursor-pointer shadow-md ${
            itemSelect === item
              ? "bg-sky-500 hover:bg-sky-700"
              : "bg-white hover:bg-zinc-100"
          }`}
          key={item.id}
          onClick={() => {
            onItemSelect(item);
          }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;