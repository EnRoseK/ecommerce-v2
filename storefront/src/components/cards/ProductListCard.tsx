import Image from 'next/image';
import Link from 'next/link';

export const ProductListCard: React.FC = () => {
  return (
    <article className='product-list-view relative grid  grid-cols-4 gap-8  overflow-hidden'>
      <div className='col-span-1 '>
        <Link href={`#`} className='block border border-black/10 hover:border-skin-primary'>
          <div className='card-img-container relative mx-auto h-[180px] w-full max-w-[270px]  overflow-hidden md:h-[300px] '>
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
        </Link>
      </div>

      <div className='col-span-3'>
        <div className='mb-2 mt-auto text-12px text-gray-400 sm:text-sm'>Common good</div>
        <Link
          href={`#`}
          className='mb-1.5 line-clamp-2 min-h-[30px] text-base font-semibold leading-5 text-skin-base hover:text-skin-primary'
        >
          [Sample] Chemex Coffeemaker 3 Cup consetetur sadipscing elitr
        </Link>

        <div className='space-s-2 mb-2 flex items-center gap-1'>
          <span className='inline-block text-sm font-semibold text-skin-primary sm:text-15px lg:text-base'>
            $300
          </span>
          <del className='text-sm text-gray-400 text-opacity-70'>$1000</del>
        </div>
        <p className='line-clamp-3 text-sm leading-6 text-skin-base text-opacity-80'>
          Stemming from an intense passion for the most flavourful cup of coffee, Able Brewing set
          out to create a brewer that was as aesthetically pleasing as it was functional. They
          imagined a product that would easily find itself at home in your kitchen during your
          morning routine. A product that would successfully showcase the Kone filter that they had
          painstakingly perfected. Inspired by Japanese and Mid-Century design, the resulting brewer
          elegantly serves pour over coffee. The multi-part design allows the top brewer portion to
          be removed once brewing is complete leaving a single pot server. The all ceramic exterior
          is dishwasher safe.
        </p>
        <div className='product-cart-button mt-6 inline-block'>
          <button className='min-w-[150px] items-center justify-center rounded-full bg-brand px-4 py-2 text-[13px] text-brand-light focus:outline-none focus-visible:outline-none'>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
};
