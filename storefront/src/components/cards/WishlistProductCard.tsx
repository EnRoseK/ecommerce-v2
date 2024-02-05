import Image from 'next/image';
import Link from 'next/link';
import { IoIosHeart } from 'react-icons/io';

export const WishlistProductCard: React.FC = () => {
  return (
    <div className='group flex flex-col border-b border-border-base py-4 first:-mt-8 last:border-b-0 last:pb-0 md:flex-row lg:first:-mt-4 2xl:py-5 2xl:first:-mt-7'>
      <div className='flex'>
        <div className='relative mt-1 shrink-0'>
          <div className='flex max-w-[80px] overflow-hidden group-hover:scale-105'>
            <Image
              src={'/assets/images/products/p-3.jpg'}
              alt={'Product Image'}
              width={80}
              height={80}
              quality={100}
              style={{ width: 'auto' }}
              className='bg-fill-thumbnail object-cover'
            />
          </div>
        </div>

        <div className='ml-2 flex h-full flex-col 2xl:ml-3.5'>
          <Link
            href='#'
            className='mb-1.5 text-13px leading-5 text-brand-dark hover:text-brand sm:text-sm sm:leading-6 lg:text-15px'
          >
            [Sample] Chemex Coffeemaker 3 Cup consetetur sadipscing elitr
          </Link>
          <div className='mb-1 text-13px sm:text-sm lg:mb-2'>Common good</div>
          <div className='-mx-1'>
            <span className='mx-1 inline-block text-sm font-semibold text-brand-dark sm:text-15px lg:text-base'>
              $300
            </span>
            <del className='mx-1 text-sm text-brand-dark text-opacity-50'>$1000</del>
          </div>
        </div>
      </div>
      <div className='ml-auto flex cursor-pointer md:pt-7'>
        <IoIosHeart className='mt-0.5 h-5 w-5 text-brand' />
        <span className='-mt-0.5 ml-3 text-15px font-semibold text-brand md:mt-0'>Favourited</span>
      </div>
    </div>
  );
};
