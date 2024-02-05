import { accountNavItems } from '@/constants';
import classNames from 'classnames';
import { useRouter } from 'next/router';

export const AccountNavigation: React.FC = () => {
  const router = useRouter();

  return (
    <nav className='flex flex-col overflow-hidden rounded-md border border-border-base pb-2 md:pb-6'>
      {accountNavItems.map((item) => {
        const isActive = item.slug === (router.query.tab || 'settings');

        return (
          <button
            onClick={() => {
              router.push({ query: { ...router.query, tab: item.slug } });
            }}
            key={item.slug}
            type='button'
            className={classNames(
              'mb-1 flex cursor-pointer items-center px-3.5 py-3.5 text-sm text-brand-dark !transition-none hover:text-brand lg:text-15px xl:px-4 2xl:px-5',
              {
                'bg-fill-secondary font-medium': isActive,
                'font-normal': !isActive,
              },
            )}
          >
            <span className='me-1 flex w-6 justify-center'>
              <item.icon className='h-5 w-5 text-[#8C969F] md:h-[22px] md:w-[22px]' />
            </span>
            <span className='pl-1 transition-none'>{item.name}</span>
          </button>
        );
      })}
    </nav>
  );
};
