import {
  CloseButton,
  ProductQuantityButtons,
  ProductStockInformation,
  ProductTags,
  ProductTitleAndPrice,
  ProductVariations,
  ThumbnailCarousel,
} from '@/components';
import Link from 'next/link';

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
            <div className='justify-center overflow-hidden xl:flex'>
              <ThumbnailCarousel isProductModal />
            </div>

            {/* Details */}
            <div className='flex flex-shrink-0 flex-col lg:w-[430px] xl:w-[520px] 2xl:w-[520px]'>
              {/* Title and Price */}
              <ProductTitleAndPrice isProductDetailsModal />

              {/* Variations */}
              <ProductVariations />

              {/* Stock information */}
              <ProductStockInformation />

              {/* Add to cart */}
              <ProductQuantityButtons />

              {/* Tags */}
              <ProductTags />

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
