import {
  ProductQuantityButtons,
  ProductStockInformation,
  ProductTags,
  ProductTitleAndPrice,
  ProductVariations,
  ThumbnailCarousel,
} from '@/components';

export const ProductSingleDetails: React.FC = () => {
  return (
    <div className='pb-2 pt-6 md:pt-7'>
      <div className='grid-cols-10 gap-7 lg:grid 2xl:gap-8'>
        {/* Thumbnail */}
        <div className='col-span-5 mb-6 overflow-hidden md:mb-8 lg:mb-0'>
          <ThumbnailCarousel
            thumbnailClassName='xl:w-[700px] 2xl:w-[880px]'
            galleryClassName='xl:w-[100px] 2xl:w-[120px]'
          />
        </div>

        {/* Details */}
        <div className='col-span-5 flex shrink-0 flex-col xl:pl-2'>
          {/* Title and Price */}
          <ProductTitleAndPrice />

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
          <ProductVariations />

          {/* Stock information */}
          <ProductStockInformation />

          {/* Add to cart */}
          <ProductQuantityButtons />

          {/* Tags */}
          <ProductTags />
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
