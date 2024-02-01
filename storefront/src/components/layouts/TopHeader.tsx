import { Container } from '@/components';
import { topMenuItems } from '@/constants';
import Link from 'next/link';

export const TopHeader: React.FC = () => {
  return (
    <div className='border-b border-white/5 text-13px text-gray-300'>
      <Container>
        <div className='flex h-12 items-center justify-between gap-5 py-2'>
          <p className='hidden truncate md:block'>
            Free International Shipping. No Minimum Purchase Required*
          </p>
          <div className='flex max-w-[1920px] flex-shrink-0'>
            <nav className='relative flex'>
              {topMenuItems.map((item) => {
                return (
                  <div key={item.id} className='group mx-2 md:mx-3'>
                    <Link
                      href={item.url}
                      className='inline-flex items-center py-2 font-normal text-gray-300 group-hover:text-brand'
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      </Container>
    </div>
  );
};
