import { TopHeader, MiddleHeader, BottomHeader } from '@/components';
import { useEffect, useState } from 'react';

export const Header: React.FC = () => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  useEffect(() => {
    const topOffset = 130;
    const listener = () => {
      if (window.scrollY > topOffset) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    document.addEventListener('scroll', listener);
    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, []);

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
