import { Container, Logo, Searchbar } from '@/components';
import { navigationItems } from '@/constants';
import { useStopScroll } from '@/hooks';
import { CartIcon, SearchIcon, UserIcon } from '@/icons';
import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

interface BottomHeaderProps {
  isScrolling: boolean;
}

export const BottomHeader: React.FC<BottomHeaderProps> = ({ isScrolling }) => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  useStopScroll(showSearch);

  return (
    <div
      className={classNames('z-50 hidden w-full bg-fill-one lg:block', {
        'lg:fixed lg:top-0 lg:shadow-header': isScrolling,
      })}
    >
      <Container>
        <div className='flex items-center justify-between'>
          <Logo
            className={classNames({
              'w-0 -translate-y-5 opacity-0': !isScrolling,
              '!w-auto translate-y-0 opacity-100': isScrolling,
            })}
          />

          {/* Categories Button */}
          <div className={classNames('relative me-8 w-72 flex-shrink-0', { hidden: isScrolling })}>
            <button className='hover:border-skin-four flex min-h-[60px] w-full items-center rounded-t bg-brand px-[18px] py-4 font-medium uppercase text-white focus:outline-none'>
              <FiMenu className='me-3 text-2xl' />
              <span>All Categories</span>
            </button>
          </div>

          {/* Navigation */}
          <nav
            className={classNames('flex', { 'w-full': !isScrolling, 'ml-8 w-auto': isScrolling })}
          >
            {navigationItems.map((item) => {
              return (
                <div className='group mx-4 py-3 xl:mx-4 2xl:mx-5 ' key={item.id}>
                  <Link
                    href={item.url}
                    className='relative inline-flex items-center py-2 text-sm font-medium uppercase text-white before:absolute before:-bottom-3 before:end-0 before:h-[3px] before:w-0 before:bg-brand before:transition-all before:duration-300 group-hover:text-brand group-hover:before:end-auto group-hover:before:start-0 group-hover:before:w-full'
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Search */}
          {showSearch && (
            <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center px-4'>
              <Searchbar
                showOverlay
                overlayClickHandler={() => setShowSearch(false)}
                className='max-w-[780px] xl:max-w-[830px] 2xl:max-w-[1000px]'
              />
            </div>
          )}

          {/* Menu Buttons */}
          <div className='ms-auto flex flex-shrink-0 items-center'>
            <div
              className={classNames('flex items-center overflow-hidden', {
                '!w-auto translate-y-0 opacity-100': isScrolling,
                'w-0 -translate-y-5 opacity-0': !isScrolling,
              })}
            >
              <button
                onClick={() => setShowSearch(true)}
                type='button'
                className='hover:text-heading me-6 flex h-full w-12 items-center justify-center outline-none focus:outline-none md:w-14'
              >
                <SearchIcon width={22} height={22} className='text-white ' />
              </button>

              <button type='button' className='group hidden shrink-0 items-center lg:flex'>
                <span className='flex h-[45px] w-[45px] items-center justify-center rounded-full border-2 border-white/15 px-[5px]'>
                  <UserIcon className='text-brand' />
                </span>
                <span className='ms-2 text-sm font-normal text-white focus:outline-none group-hover:text-brand'>
                  My Account
                </span>
              </button>

              {/* Cart Button */}
              <button type='button' className='group ms-6 hidden shrink-0 items-center lg:flex'>
                <span className='relative flex h-[45px] w-[45px] items-center justify-center rounded-full border-2 border-white/15 px-[5px]'>
                  <CartIcon className='text-brand' />

                  <span className='absolute -top-1 right-5 flex min-h-[20px] min-w-[20px] items-center justify-center rounded-[20px] bg-brand p-0.5 text-10px text-brand-light '>
                    0
                  </span>
                </span>
                <span className='ms-2 text-sm font-normal text-white focus:outline-none group-hover:text-brand'>
                  Cart
                </span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
