import { RocketIcon } from '@/icons';

export const FeaturesCard: React.FC = () => {
  return (
    <div className='group flex items-center justify-center border-r border-black/10 px-5  xl:px-5 2xl:px-6 '>
      <div className='flex flex-shrink-0 items-center justify-center text-skin-base'>
        <RocketIcon />
      </div>

      <div className='ps-4'>
        <h3 className='-mt-0.5 text-15px font-medium sm:text-base'>Free Shipping</h3>
        <p className='text-sm leading-7 lg:leading-[27px]'>Free shipping on all order</p>
      </div>
    </div>
  );
};
