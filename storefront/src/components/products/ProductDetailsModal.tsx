import { Button, CloseButton } from '@/components';
import { CartIcon, LabelIcon, MinusIcon, PlusIcon } from '@/icons';
import Link from 'next/link';
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoArrowRedoOutline } from 'react-icons/io5';

interface ProductDetailsModalProps {
  closeHandler: () => void;
}

export const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({ closeHandler }) => {
  return (
    <>
      <CloseButton onClickHandler={closeHandler} />
      <div className='overflow-hidden'>
        <div className='mb-2 px-2 pt-4 md:px-5 md:pt-7 lg:mb-2'>
          <div className='items-stretch justify-between gap-8 lg:flex'>
            {/* Thumbnail */}
            <div className='justify-center overflow-hidden xl:flex'></div>

            {/* Details */}
            <div className='flex flex-shrink-0 flex-col lg:w-[430px] xl:w-[520px] 2xl:w-[520px]'>
              {/* Title and Price */}
              <div className='pb-5 pt-5 lg:pt-0'>
                <Link
                  href={'#'}
                  className='-mt-1.5 mb-2 block text-lg font-medium text-brand-dark hover:text-brand md:mb-2.5 md:text-xl xl:text-2xl'
                >
                  [Sample] Chemex Coffeemaker 3 Cup consetetur sadipscing elitr
                </Link>

                <span className='text-sm font-medium md:text-15px'>Common good</span>

                <div className='mt-5 flex items-center'>
                  <div className='text-base font-medium text-brand md:text-xl xl:text-[30px]'>
                    $300
                  </div>
                  <del className='pl-3 text-sm text-opacity-50 md:text-15px'>$500</del>
                  <span className='ml-2.5 inline-block rounded bg-brand-tree bg-opacity-20 px-2 py-1 text-xs font-bold uppercase text-brand-tree md:text-sm'>
                    10% off
                  </span>
                </div>
              </div>

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

              {/* Description */}
              <div className='pt-6 xl:pt-8'>
                <h3 className='mb-3 text-15px font-medium text-fill-base sm:text-base lg:mb-3.5'>
                  Product Details:
                </h3>
                <p className='text-sm leading-7 lg:leading-[1.85em]'>
                  Sugar, Unbleached Enriched Flour (Wheat Flour, Niacin, Reduced Iron, Thiamine
                  Mononitrate Vitamin B1 , Riboflavin Vitamin B2 , Folic Acid), Palm and/or Canola
                  Oil, Cocoa (Processed with Alkali), High Fructose Corn Syrup, Leavening (Baking
                  Soda and/or Calcium Phosphate), Cornstarch, Salt,...
                </p>
                <Link
                  className='mt-2 block text-sm leading-7 text-brand hover:underline lg:leading-[1.85em]'
                  href={'#'}
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
