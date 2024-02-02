import { Container, Logo, Searchbar } from '@/components';
import { CartIcon, MenuIcon, UserIcon } from '@/icons';

export const MiddleHeader: React.FC = () => {
  return (
    <div className='border-b border-white/5'>
      <Container>
        <div className='flex items-center justify-between py-2 md:py-4'>
          {/* Mobile Menu Button */}
          <div className='relative flex-shrink-0 lg:hidden'>
            <button className='flex flex-shrink-0 items-center rounded-md border border-border-base/40  px-2.5 py-3 text-sm text-skin-inverted hover:border-border-four focus:outline-none md:px-3 md:py-3.5'>
              <MenuIcon />
            </button>
          </div>

          {/* Logo */}
          <Logo />

          {/* Searchbar */}
          <Searchbar className='hidden lg:mx-10 lg:flex lg:max-w-[450px] xl:max-w-[650px] 2xl:max-w-[900px]' />

          {/* TODO: Add login modal and card drawer */}
          {/* Menu Buttons */}
          <div className='flex space-x-5 lg:max-w-[33%] xl:space-x-10'>
            {/* User Button */}
            <button type='button' className='group hidden shrink-0 items-center lg:flex'>
              <span className='flex h-[45px] w-[45px] items-center justify-center rounded-full border-2 border-white/15 px-[5px]'>
                <UserIcon className='text-brand' />
              </span>
              <span className='ms-2 text-sm font-normal text-white focus:outline-none group-hover:text-brand'>
                My Account
              </span>
            </button>

            {/* Cart Button */}
            <button type='button' className='group hidden shrink-0 items-center lg:flex'>
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
      </Container>
    </div>
  );
};
