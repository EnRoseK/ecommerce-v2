import { MinusIcon, PlusIcon } from '@/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosCloseCircle } from 'react-icons/io';

export const CartProductCard: React.FC = () => {
  return (
    <div className='group relative flex h-auto w-full items-center justify-start border-b border-border-one border-opacity-70 py-4 text-brand-light last:border-b-0 md:py-7'>
      {/* Image */}
      <div className='relative flex h-[90px] w-[90px] shrink-0 cursor-pointer overflow-hidden rounded md:h-[100px] md:w-[100px]'>
        <Image
          src={'/assets/images/products/16.jpg'}
          width={100}
          height={100}
          loading='eager'
          alt={'Product Image'}
          style={{ width: 'auto' }}
          className='bg-fill-thumbnail object-cover'
        />

        <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-30 md:bg-opacity-0 md:group-hover:bg-opacity-30'>
          <IoIosCloseCircle className='relative text-2xl text-white md:scale-0 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100' />
        </div>
      </div>

      {/* Details */}
      <div className='flex w-full items-start justify-between overflow-hidden'>
        <div className='pl-3 md:pl-4'>
          <Link
            href={`#`}
            className='mb-2 block text-13px leading-5 text-brand-dark hover:text-brand sm:text-sm lg:text-15px'
          >
            [Sample] Chemex Coffeemaker 3 Cup consetetur sadipscing elitr
          </Link>

          {/* Quantity Button */}
          <div className='inline-flex shrink-0 items-center justify-between overflow-hidden rounded'>
            <button className='flex !h-6 !w-6 shrink-0 items-center justify-center rounded-full border border-border-three pr-0 text-brand-muted  hover:border-brand hover:bg-brand hover:text-brand-light focus:outline-none focus-visible:outline-none'>
              <MinusIcon width={14} height={14} />
            </button>
            <span className='flex h-full w-9 shrink-0 cursor-default items-center justify-center text-15px font-semibold text-brand-dark'>
              1
            </span>
            <button className='group flex !h-6 !w-6 flex-shrink-0 items-center justify-center rounded-full border border-border-three !pr-0 text-brand-muted hover:border-brand hover:bg-brand hover:text-brand-light focus:outline-none focus-visible:outline-none'>
              <PlusIcon width={14} height={14} />
            </button>
          </div>
        </div>

        <div className='flex min-w-[65px] shrink-0 justify-end text-sm font-semibold leading-5 text-brand-dark md:min-w-[80px] md:text-base'>
          $100
        </div>
      </div>
    </div>
  );
};
