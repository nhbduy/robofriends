import React, { Suspense } from 'react';

const Card = React.lazy(() => import('./Card'));

const List = ({ data }) => {
  return (
    <div>
      {data.map(item => (
        <Suspense key={item.id} fallback={<div>Loading...</div>}>
          <Card
            id={item.id}
            name={item.name}
            username={item.username}
            email={item.email}
          />
        </Suspense>
      ))}
    </div>
  );
};

export default List;
