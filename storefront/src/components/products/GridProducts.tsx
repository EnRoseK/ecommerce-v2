import React from 'react';
import { ProductGridCard } from '@/components';

export const GridProducts: React.FC = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
      {Array.from(Array(15)).map((_, index) => {
        return <ProductGridCard key={index} isHome={false} />;
      })}
    </div>
  );
};
