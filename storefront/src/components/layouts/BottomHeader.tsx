import { Container } from '@/components';
import { navigationItems } from '@/constants';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';

// TODO: Add Logo, Search, and buttons when scrolling
export const BottomHeader: React.FC = () => {
  return (
    <div className='navbar hidden bg-fill-one lg:block'>
      <Container>
        <div className='flex items-center justify-between'>
          {/* Categories Button */}
          <div className='relative me-8 w-72 flex-shrink-0'>
            <button className='hover:border-skin-four flex min-h-[60px] w-full items-center rounded-t bg-brand px-[18px] py-4 font-medium uppercase text-white focus:outline-none'>
              <FiMenu className='me-3 text-2xl' />
              <span>All Categories</span>
            </button>
          </div>

          {/* Navigation */}
          <nav className='flex w-full'>
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
        </div>
      </Container>
    </div>
  );
};
