import { BsX } from 'react-icons/bs';
import { Countdown } from '@/components';

export const HighlightedBar: React.FC = () => {
  const today = new Date();

  return (
    <div className='relative z-50 flex min-h-[40px] w-full items-center justify-center bg-gradient-to-r from-[#2930b4] to-[#2a9eb0] px-4 py-2 text-sm text-brand-light md:px-6 lg:px-8'>
      <div className='flex items-center'>
        <p>
          Claim your online <strong>FREE Delivery or Shipping</strong> today! Expires in
        </p>
      </div>
      <Countdown date={new Date(today.setHours(today.getHours() + 7))} />

      {/* Close Button */}
      <button className='absolute right-0 mr-2 flex h-7 w-7 items-center justify-center rounded-full outline-none hover:bg-brand-light hover:bg-opacity-10 focus:bg-opacity-10 focus:text-brand-light md:mr-3 md:h-8 md:w-8 lg:mr-4'>
        <BsX size={24} />
      </button>
    </div>
  );
};
