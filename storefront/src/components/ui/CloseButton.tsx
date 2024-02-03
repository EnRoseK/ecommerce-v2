import { IoClose } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';

interface CloseButtonProps {
  className?: string;
  onClickHandler: () => void;
}

export const CloseButton: React.FC<CloseButtonProps> = ({ onClickHandler, className }) => {
  return (
    <button
      onClick={onClickHandler}
      className={twMerge(
        'absolute right-1 top-1 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-light text-brand-dark  text-opacity-50 hover:text-opacity-100 focus:outline-none lg:h-9 lg:w-9 lg:bg-transparent',
        className,
      )}
    >
      <IoClose className='text-xl lg:text-2xl' />
    </button>
  );
};
