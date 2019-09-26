import React from 'react';
import Card from './Card';

const List = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <Card 
          key={item.id} 
          id={item.id} 
          name={item.name} 
          username={item.username } 
          email={item.email} />
      ))}
    </div>
  );
}

export default List;