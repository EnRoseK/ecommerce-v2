import Image from 'next/image';
import Link from 'next/link';

export const SearchProductCard: React.FC = () => {
  return (
    <Link href='/products/123' className='group flex h-auto w-full items-center justify-start'>
      <div className='relative me-4 flex w-20 flex-shrink-0 cursor-pointer overflow-hidden rounded-md'>
        <Image
          src='/assets/images/products/16-1.jpg'
          width={70}
          height={70}
          alt={'Product Image'}
          className='bg-fill-thumbnail object-cover'
          style={{ width: 'auto' }}
        />
      </div>

      <div className='flex w-full flex-col overflow-hidden'>
        <h3 className='mb-1.5 truncate text-15px  text-skin-base'>Test product</h3>
        <div className='space-x-2 '>
          <span className='inline-block text-sm font-semibold text-skin-primary sm:text-15px lg:text-base'>
            120$
          </span>
          <del className='text-sm text-skin-base text-opacity-70'>200$</del>
        </div>
      </div>
    </Link>
  );
};
