import { ProductListCard } from '@/components';

export const ListProducts: React.FC = () => {
  return (
    <div className='grid grid-cols-1 gap-8'>
      {Array.from(Array(10)).map((_, index) => {
        return <ProductListCard key={index} />;
      })}
    </div>
  );
};
