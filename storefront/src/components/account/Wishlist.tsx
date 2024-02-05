import { WishlistProductCard } from '@/components';

export const Wishlist: React.FC = () => {
  return (
    <>
      <h2 className='text-base font-semibold text-brand-dark md:text-lg lg:pt-0  xl:text-[20px]'>
        Wishlist
      </h2>

      <div className='flex flex-col pt-8 2xl:pt-12'>
        <div className='flex flex-col'>
          {Array.from(Array(5)).map((_, index) => {
            return <WishlistProductCard key={index} />;
          })}
        </div>
      </div>
    </>
  );
};
