import { TopHeader, MiddleHeader, BottomHeader } from '@/components';
import { useStickyHeader } from '@/hooks';

export const Header: React.FC = () => {
  const isScrolling = useStickyHeader();

  return (
    <>
      <header className='sticky top-0 z-50 lg:!relative'>
        <div className='bg-fill-one'>
          <TopHeader />
          <MiddleHeader />
          <BottomHeader isScrolling={isScrolling} />
        </div>
      </header>
    </>
  );
};
