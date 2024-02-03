import { CloseIcon, DeleteIcon } from '@/icons';
import { Button, CartProductCard, EmptyCart } from '@/components';

interface CartDrawerProps {
  closeHandler: () => void;
  isEmpty?: boolean;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ closeHandler, isEmpty = false }) => {
  return (
    <div className='flex h-full w-full flex-col justify-between'>
      {/* Header */}
      <div className='relative flex w-full items-center justify-between border-b border-border-base ps-5 md:ps-7'>
        <h3 className='text-xl font-semibold text-fill-base'>Shopping Cart</h3>
        <div className='flex items-center'>
          <button className='flex flex-shrink items-center text-15px text-brand-dark opacity-50 hover:opacity-100 focus:outline-none '>
            <DeleteIcon />
            <span className='px-1'>Clear</span>
          </button>

          {/* Close Button */}
          <button
            onClick={closeHandler}
            type='button'
            className='flex items-center justify-center px-4 py-6 text-skin-base hover:opacity-60 focus:outline-none md:px-6 lg:py-7'
          >
            <CloseIcon width={16} height={16} />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className='w-full flex-1 overflow-y-auto'>
        {isEmpty ? (
          <EmptyCart />
        ) : (
          <div className='h-full w-full px-5 md:px-7'>
            {Array.from(Array(5)).map((_, index) => {
              return <CartProductCard key={index} />;
            })}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className='border-t border-border-base px-5 pb-5 pt-5 md:px-7 md:pb-6 md:pt-6'>
        <div className='flex pb-5 md:pb-7'>
          <div className='pr-3'>
            <h3 className='mb-2.5 text-15px font-medium text-fill-base sm:text-base'>Subtotal: </h3>
            <p className='text-sm leading-6 lg:leading-[27px]'>
              Final price and discounts will be determined at the time of payment processing.
            </p>
          </div>
          <div className='-mt-0.5 min-w-[80px] shrink-0 text-right text-base font-semibold text-brand-dark md:text-lg'>
            $0.00
          </div>
        </div>
        <Button className='w-full'>Proceed to checkout</Button>
      </div>
    </div>
  );
};
