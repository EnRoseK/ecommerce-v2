import { useAnimation, useClickOutside } from '@/hooks';
import { CartIcon, CloseIcon, HomeIcon, MenuIcon, SearchIcon, UserIcon } from '@/icons';
import classNames from 'classnames';
import { useState } from 'react';

export const MobileNavigation: React.FC = () => {
  const [showSearch, setShowSearch, ref] = useClickOutside();
  const [renderSearch, onAnimationEnd] = useAnimation(showSearch);
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <div className='body-font fixed -bottom-0.5 z-30 flex h-14 w-full items-center justify-between bg-brand-light px-4 pb-0.5 text-brand-muted shadow-bottomNavigation md:px-6 lg:hidden lg:px-8'>
      <button
        aria-label='Menu'
        className='flex shrink-0 flex-col items-center justify-center outline-none focus:outline-none'
      >
        <MenuIcon />
      </button>

      <button
        className='relative flex h-auto shrink-0 items-center justify-center focus:outline-none'
        onClick={() => setShowSearch(true)}
      >
        <SearchIcon />
      </button>

      <button
        className='relative flex h-auto shrink-0 items-center justify-center focus:outline-none'
        aria-label='Home Button'
      >
        <HomeIcon />
      </button>

      <button
        className='relative flex h-auto shrink-0 items-center justify-center focus:outline-none'
        aria-label='Cart Button'
      >
        <CartIcon />
      </button>

      <button
        className='relative flex h-auto shrink-0 items-center justify-center focus:outline-none'
        aria-label='User Button'
      >
        <UserIcon />
      </button>

      {renderSearch && (
        <div
          onAnimationEnd={onAnimationEnd}
          className={classNames('absolute bottom-0 left-0 right-0 top-0 px-2 py-2', {
            'animate-fadeIn': showSearch,
            'animate-fadeOut': !showSearch,
          })}
          ref={ref}
        >
          <form noValidate className='relative flex h-full w-full rounded-md'>
            <label className='flex flex-1 items-center py-0.5'>
              <input
                className='text-heading h-[45px] w-full rounded-full border border-border-base bg-brand-light pl-5 pr-14 text-sm text-brand-dark outline-none transition-all duration-200 placeholder:text-brand-dark/50 focus:border-brand focus:ring-0 md:pl-6 md:pr-16'
                placeholder='Search'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </label>
            {searchValue ? (
              <button
                onClick={() => setSearchValue('')}
                type='button'
                className='hover:text-heading absolute right-0 top-0 flex h-full w-14 items-center justify-center  outline-none focus:outline-none md:w-16'
              >
                <CloseIcon width={17} height={17} className='text-brand-dark text-opacity-40' />
              </button>
            ) : (
              <span className='absolute right-0 top-0 flex h-full w-14 shrink-0 items-center justify-center focus:outline-none md:w-16'>
                <SearchIcon width={20} height={20} className='text-brand-dark text-opacity-40' />
              </span>
            )}
          </form>
        </div>
      )}
    </div>
  );
};
