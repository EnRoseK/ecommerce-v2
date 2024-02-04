import classNames from 'classnames';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import { Overlay } from '..';

interface CategoryDropdownMenuProps {
  show: boolean;
  onAnimationEnd: () => void;
  closeHandler: () => void;
}

export const CategoryDropdownMenu: React.FC<CategoryDropdownMenuProps> = ({
  show,
  onAnimationEnd,
  closeHandler,
}) => {
  // TODO: Add child menu
  return (
    <>
      <div
        onAnimationEnd={onAnimationEnd}
        className={classNames('absolute z-[1000] grid w-72 lg:w-full', {
          'animate-collapseOpen': show,
          'animate-collapseClose': !show,
        })}
      >
        <div className='overflow-hidden'>
          <ul className='max-h-[600px] w-full overflow-y-auto rounded-b-md border-2 border-t-0 border-skin-primary bg-skin-fill'>
            {Array.from(Array(10)).map((_, index) => {
              return (
                <li
                  key={index}
                  className='group flex items-center justify-between border-b border-border-base px-3.5 text-sm last:border-b-0 2xl:px-4'
                >
                  <Link
                    href='#'
                    className='flex w-full items-center py-3 text-start outline-none focus:text-skin-base focus:outline-none focus:ring-0 group-hover:text-brand'
                  >
                    <span className='capitalize'>Category One</span>
                    <span className='ml-auto hidden md:inline-flex'>
                      <IoIosArrowForward className='text-15px text-skin-base text-opacity-40 group-hover:text-brand' />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <Overlay show={show} onAnimationEnd={onAnimationEnd} onClickHandler={closeHandler} />
    </>
  );
};
