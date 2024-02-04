import { accountNavItems } from '@/constants';
import classNames from 'classnames';

interface AccountNavigationProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export const AccountNavigation: React.FC<AccountNavigationProps> = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <nav className='flex flex-col overflow-hidden rounded-md border border-border-base pb-2 md:pb-6'>
      {accountNavItems.map((item) => {
        return (
          <button
            onClick={() => setActiveTab(item.slug)}
            key={item.slug}
            type='button'
            className={classNames(
              'mb-1 flex cursor-pointer items-center px-3.5 py-3.5 text-sm text-brand-dark hover:text-brand lg:text-15px xl:px-4 2xl:px-5',
              {
                'bg-fill-secondary': activeTab === item.slug,
              },
            )}
          >
            <span className='me-1 flex w-6 justify-center '>
              <item.icon className='h-5 w-5 md:h-[22px] md:w-[22px]' />
            </span>
            <span className='pl-1'>{item.name}</span>
          </button>
        );
      })}
    </nav>
  );
};
