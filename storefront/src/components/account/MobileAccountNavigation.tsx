import { accountNavItems } from '@/constants';
import { useAnimation, useClickOutside } from '@/hooks';
import classNames from 'classnames';
import { FaChevronDown } from 'react-icons/fa';

interface MobileAccountNavigationProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export const MobileAccountNavigation: React.FC<MobileAccountNavigationProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const selectedItem = accountNavItems.find((item) => item.slug === activeTab);
  const [showDropdown, setShowDropdown, ref] = useClickOutside();
  const [renderDropdown, onAnimationEnd] = useAnimation(showDropdown);

  return (
    <div ref={ref} className='relative w-full'>
      <button
        onClick={() => setShowDropdown((prev) => !prev)}
        type='button'
        className='relative flex w-full cursor-pointer items-center rounded border border-border-base p-4 text-left text-brand-dark focus:outline-none md:p-5'
      >
        {selectedItem && (
          <>
            <selectedItem.icon className='h-5 w-5 md:h-[22px] md:w-[22px]' />
            <span className='relative flex items-center truncate pl-2.5 text-sm font-medium md:text-15px'>
              {selectedItem.name}
            </span>
            <span className='pointer-events-none absolute inset-y-0 right-4 flex items-center md:right-5'>
              <FaChevronDown
                className='h-3 w-3 text-brand-dark text-opacity-70 md:h-3.5 md:w-3.5'
                aria-hidden='true'
              />
            </span>
          </>
        )}
      </button>

      {renderDropdown && (
        <ul
          onAnimationEnd={onAnimationEnd}
          className={classNames(
            'absolute z-20 mt-1.5 grid max-h-72 w-full overflow-auto rounded-md bg-brand-light py-2.5 text-sm shadow-dropDown focus:outline-none md:text-15px',
            { 'animate-collapseOpen': showDropdown, 'animate-collapseClose': !showDropdown },
          )}
        >
          <div className='overflow-hidden'>
            {accountNavItems.map((item) => {
              const active = item.slug === activeTab;

              return (
                <li
                  key={item.slug}
                  onClick={() => {
                    setActiveTab(item.slug);
                    setShowDropdown(false);
                  }}
                  className={classNames(
                    'relative cursor-pointer px-4 py-3 hover:bg-fill-dropdown-hover md:px-5',
                    {
                      'bg-fill-dropdown-hover text-brand-dark': active,
                      'bg-brand-light': !active,
                    },
                  )}
                >
                  <span className='flex items-center'>
                    <item.icon className='h-5 w-5 md:h-[22px] md:w-[22px]' />
                    <span className='block truncate pl-2.5 md:pl-3'>{item.name}</span>
                  </span>
                </li>
              );
            })}
          </div>
        </ul>
      )}
    </div>
  );
};
