import { twMerge } from 'tailwind-merge';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface CarouselNavigationProps {
  prevButtonId: string;
  nextButtonId: string;
  prevButtonClassName?: string;
  nextButtonClassName?: string;
}

export const CarouselNavigation: React.FC<CarouselNavigationProps> = ({
  prevButtonId,
  nextButtonId,
  prevButtonClassName = ' start-3 xl:start-8 ',
  nextButtonClassName = ' end-3 xl:end-8',
}) => {
  return (
    <div className='absolute top-2/4 z-10 flex w-full items-center'>
      <div
        id={prevButtonId}
        className={twMerge(
          'absolute flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-brand-light text-base shadow-navigation hover:bg-brand hover:text-brand-light focus:outline-none md:h-8 md:w-8 lg:h-9 lg:w-9 lg:text-lg  xl:h-10 xl:w-10 xl:text-xl 3xl:text-2xl',
          prevButtonClassName,
        )}
      >
        <IoIosArrowBack />
      </div>

      <div
        id={nextButtonId}
        className={twMerge(
          'absolute flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-brand-light text-base shadow-navigation hover:bg-brand hover:text-brand-light focus:outline-none md:h-8 md:w-8 lg:h-9 lg:w-9 lg:text-lg xl:h-10 xl:w-10 xl:text-xl 3xl:text-2xl',
          nextButtonClassName,
        )}
      >
        <IoIosArrowForward />
      </div>
    </div>
  );
};
