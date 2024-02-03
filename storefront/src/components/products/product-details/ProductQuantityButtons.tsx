import { Button } from '@/components';
import { CartIcon, MinusIcon, PlusIcon } from '@/icons';
import React from 'react';
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoArrowRedoOutline } from 'react-icons/io5';

export const ProductQuantityButtons: React.FC = () => {
  return (
    <div className='space-y-2.5 pt-1.5 md:space-y-3.5 lg:pt-3 xl:pt-4'>
      {/* Quantity Button */}
      <div className='flex h-11 shrink-0 items-center justify-between overflow-hidden rounded bg-[#f3f5f9] md:h-14'>
        <button className='ml-auto flex !h-10 !w-10 shrink-0 scale-80 items-center justify-center rounded-full text-brand-dark hover:bg-fill-four focus:outline-none focus-visible:outline-none lg:scale-100 '>
          <MinusIcon width={22} height={22} />
        </button>

        <span className='duration-250 flex h-full w-12 shrink-0 cursor-default items-center justify-center text-base font-semibold text-brand-dark transition-colors ease-in-out md:w-20 md:text-[17px] xl:w-28'>
          1
        </span>

        <button className='text-heading group mr-auto flex !h-10 !w-10 flex-shrink-0 scale-80 items-center justify-center rounded-full !pr-0 hover:bg-fill-four focus:outline-none focus-visible:outline-none lg:scale-100'>
          <PlusIcon width={22} height={22} />
        </button>
      </div>

      {/* Add to Cart button */}
      <Button className='w-full px-1.5'>
        <CartIcon color='#ffffff' className='mr-3 ' />
        Add to cart
      </Button>

      <div className='grid grid-cols-2 gap-2.5'>
        {/* Wishlist Button */}
        <Button variant='border' className='group hover:text-brand'>
          <IoIosHeartEmpty className='mr-2 text-2xl transition-all group-hover:text-brand md:text-[26px] ' />
          Wishlist
        </Button>
        {/* Share button */}
        <Button variant='border' className='w-full hover:text-brand'>
          <IoArrowRedoOutline className='mr-2 text-2xl group-hover:text-brand md:text-[26px]' />
          Share
        </Button>
      </div>
    </div>
  );
};
