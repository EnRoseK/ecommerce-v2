import { IoCartOutline } from 'react-icons/io5';

export const EmptyCart: React.FC = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center px-5 pb-5 pt-8 md:px-7'>
      <div className='mx-auto flex w-[220px] md:w-auto'>
        <IoCartOutline className='text-[120px] text-gray-400' />
      </div>
      <h3 className='mb-1.5 pt-8 text-xl font-semibold text-skin-base'>Your cart is empty</h3>
      <p className='text-sm leading-7 lg:leading-[27px]'>Please add product to your cart list</p>
    </div>
  );
};
