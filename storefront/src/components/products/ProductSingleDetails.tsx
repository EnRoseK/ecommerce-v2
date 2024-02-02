import { Button, ThumbnailCarousel } from '@/components';
import { CartIcon, LabelIcon, MinusIcon, PlusIcon } from '@/icons';
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoArrowRedoOutline } from 'react-icons/io5';

export const ProductSingleDetails: React.FC = () => {
  // TODO: Code splitting
  return (
    <div className='pb-2 pt-6 md:pt-7'>
      <div className='grid-cols-10 gap-7 lg:grid 2xl:gap-8'>
        {/* Thumbnail */}
        <div className='col-span-5 mb-6 overflow-hidden  md:mb-8 lg:mb-0'>
          <ThumbnailCarousel
            thumbnailClassName='xl:w-[700px] 2xl:w-[880px]'
            galleryClassName='xl:w-[100px] 2xl:w-[120px]'
          />
        </div>

        {/* Details */}
        <div className='col-span-5 flex shrink-0 flex-col xl:pl-2'>
          {/* Title and Price */}
          <div className='pb-4 lg:pb-8'>
            <h2 className='-mt-1.5 mb-2 block text-lg font-medium text-brand-dark hover:text-brand md:mb-2.5 md:text-xl xl:text-2xl'>
              [Sample] Chemex Coffeemaker 3 Cup consetetur sadipscing elitr
            </h2>

            <span className='text-sm font-medium md:text-15px'>Common good</span>

            <div className='mt-5 flex items-center'>
              <div className='text-base font-medium text-brand md:text-xl xl:text-[30px]'>$300</div>
              <del className='pl-3 text-sm text-opacity-50 md:text-15px'>$500</del>
              <span className='ml-2.5 inline-block rounded bg-brand-tree bg-opacity-20 px-2 py-1 text-xs font-bold uppercase text-brand-tree md:text-sm'>
                10% off
              </span>
            </div>
          </div>

          {/* Product info */}
          <dl className='mb-5 border-b border-border-base pb-5 text-[14px] leading-8'>
            <dt className={`float-left w-40`}>Brand:</dt>
            <dd>OFS</dd>
            <dt className={`float-left w-40`}>SKU:</dt>
            <dd>200101</dd>
            <dt className={`float-left w-40`}>Weight:</dt>
            <dd data-product-weight=''>1.00 KGS</dd>
            <dt className={`float-left w-40`}>Shipping:</dt>
            <dd>Calculated at checkout</dd>
          </dl>

          {/* Variations */}
          <div className='mb-2 pt-0.5'>
            <h4 className='mb-3 text-15px font-normal capitalize text-brand-dark text-opacity-70'>
              Available in:
            </h4>

            <ul className='-mr-2 flex flex-wrap gap-2'>
              <li className='mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium text-brand-dark transition duration-200 ease-in-out hover:border-brand hover:text-brand md:mb-3 md:h-10 md:text-15px'>
                16GB
              </li>
            </ul>
          </div>

          {/* Stock information */}
          <div className='pb-2'>
            <span className='text-sm font-medium text-yellow'>Only 10 items left!</span>
            {/* <div className='whitespace-nowrap text-base text-brand-danger'>Out of stock!</div> */}
          </div>

          {/* Add to cart */}
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

            <Button className='w-full px-1.5'>
              <CartIcon color='#ffffff' className='mr-3 ' />
              Add to cart
            </Button>

            <div className='grid grid-cols-2 gap-2.5'>
              <Button variant='border' className='group hover:text-brand'>
                <IoIosHeartEmpty className='mr-2 text-2xl transition-all group-hover:text-brand md:text-[26px] ' />
                Wishlist
              </Button>
              <Button variant='border' className='w-full hover:text-brand'>
                <IoArrowRedoOutline className='mr-2 text-2xl group-hover:text-brand md:text-[26px]' />
                Share
              </Button>
            </div>
          </div>

          {/* Tags */}
          <ul className='pt-5 xl:pt-6'>
            <li className='relative top-1 me-2 inline-flex items-center justify-center text-sm text-skin-base text-opacity-80 md:text-15px'>
              <LabelIcon className='me-2 text-[#999]' /> Tags:
            </li>
            <li className='inline-block cursor-pointer p-[3px]'>
              <div className='block rounded border border-border-four px-2 py-1 text-13px hover:bg-fill-four md:text-sm'>
                Electronics
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Product Details */}
      <div className='w-full py-11 sm:px-0 lg:py-14 xl:px-2 xl:py-16'>
        <div className='relative z-10 mb-3 border-b-2 border-b-[#ebebeb] pb-3 capitalize before:absolute before:-bottom-0.5 before:z-[2] before:inline-block before:h-0.5 before:w-[50px] before:bg-skin'>
          <h2 className='text-[20px] font-medium text-fill-base xl:text-[20px] xl:leading-8'>
            Product details
          </h2>
        </div>

        <div className='mt-6 lg:mt-9'>
          <div className='space-y-4 text-sm leading-[2em] text-brand-muted sm:text-15px lg:space-y-5 xl:space-y-7'>
            <p>
              Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the
              Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish
              sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5’5. !!
            </p>
            <p>
              Typography is the work of typesetters, compositors, typographers, graphic designers,
              art directors, manga artists, comic book artists, graffiti artists, and now—anyone who
              arranges words, letters, numbers, and symbols for publication, display, or
              distribution—from clerical workers and newsletter writers to anyone self-publishing
              materials.
            </p>
            <p>
              Hit your next boxing workout with a combination it’s never seen before in the Combat
              Drop Arm Tank, including a freedom-instilling regular fit and dropped armhole to allow
              you to throw jabs and hooks at the punching bag with ease. A lightweight material
              keeps you fighting fit, and fresh.
            </p>
            <p>
              Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the
              Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish
              sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5’5. !!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
