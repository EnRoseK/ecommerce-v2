import { SearchIcon } from '@/icons';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

interface ProductGridCardProps {
  isHome?: boolean;
}

export const ProductGridCard: React.FC<ProductGridCardProps> = ({ isHome = true }) => {
  return (
    <article
      className={classNames(
        'group relative flex h-full flex-col px-2 sm:px-3 min-[801px]:before:absolute min-[801px]:before:right-0 min-[801px]:before:top-[30px] min-[801px]:before:z-[5] min-[801px]:before:block min-[801px]:before:h-[calc(100%_-_60px)] min-[801px]:before:w-[1px] min-[801px]:before:bg-[#f5f5f5]',
        {
          'min-[801px]:after:absolute min-[801px]:after:bottom-0 min-[801px]:after:left-0 min-[801px]:after:z-[5] min-[801px]:after:block min-[801px]:after:h-[1px] min-[801px]:after:w-full min-[801px]:after:bg-[#f5f5f5]':
            !isHome,
        },
      )}
    >
      <div className='relative mt-4  flex-shrink-0'>
        <div className='relative mx-auto h-[180px] w-full overflow-hidden group-hover:-translate-y-2.5 group-hover:opacity-80 md:h-[200px]'>
          <Image
            src={'/assets/images/products/p-3.jpg'}
            alt={'Product Image'}
            quality={100}
            priority
            fill
            sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
            className='bg-fill-thumbnail object-cover'
          />
        </div>
        <div className='absolute top-0 z-10 h-full  w-full'>
          <span className='mx-0.5  inline-block rounded-sm bg-skin-primary px-2.5 pb-[3px] pt-1 text-[10px] uppercase text-skin-inverted sm:mx-1'>
            On sale
          </span>
          <button
            className='shadow-quickviewButton absolute left-1/2 top-[40%] z-[5] block h-[50px] w-[50px] -translate-x-1/2 scale-0 rounded-full bg-brand-light px-4 py-2 text-center leading-[48px] opacity-0 hover:bg-brand hover:text-brand-light group-hover:visible group-hover:-translate-x-1/2 group-hover:scale-100 group-hover:opacity-100'
            // onClick={handlePopupView}
          >
            <SearchIcon width={20} height={20} opacity='1' />
          </button>
        </div>
      </div>

      <div className='relative mb-2 flex h-full flex-col overflow-hidden text-center'>
        <div className='mb-1.5 mt-auto text-sm leading-6 text-gray-400'>Common good</div>
        <Link
          href={`/#`}
          className='mb-2 line-clamp-2 min-h-[40px] text-sm leading-5 text-skin-base hover:text-brand'
        >
          [Sample] Chemex Coffeemaker 3 Cup consetetur sadipscing elitr
        </Link>

        <div className='space-s-2 mb-4 lg:mb-4'>
          <span className='mx-1 inline-block text-sm font-medium text-brand sm:text-15px lg:text-base'>
            $300
          </span>
          <del className='mx-1 text-sm text-gray-400 text-opacity-70'>$1000</del>
        </div>
        <div className='absolute -bottom-[45px] left-0 z-[12] inline-block w-full group-hover:bottom-[5px]'>
          <button className='min-w-[150px] items-center justify-center rounded-full bg-brand px-4 py-2 text-[13px] text-brand-light focus:outline-none focus-visible:outline-none'>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
};
