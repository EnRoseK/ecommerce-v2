import { useEffect, useState } from 'react';

export const useStickyHeader = () => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  useEffect(() => {
    const topOffset = 80;
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

  return isScrolling;
};
