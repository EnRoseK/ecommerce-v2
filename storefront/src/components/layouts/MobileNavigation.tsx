import { CartIcon, HomeIcon, MenuIcon, SearchIcon, UserIcon } from '@/icons';

interface MobileNavigationProps {
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ setShowSearch }) => {
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
    </div>
  );
};
