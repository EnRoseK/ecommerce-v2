import { useAnimation } from '@/hooks';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const BackToTopButton: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [render, onAnimationEnd] = useAnimation(show);

  const checkTop = () => {
    if (window.scrollY >= 130) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkTop);

    return () => {
      window.removeEventListener('scroll', checkTop);
    };
  }, []);

  return (
    <>
      {render && (
        <button
          onAnimationEnd={onAnimationEnd}
          onClick={scrollToTop}
          type='button'
          className={classNames(
            'fixed bottom-20 right-5 z-[100] flex h-10 w-10 cursor-pointer content-center items-center rounded bg-skin-primary text-skin-inverted',
            { 'animate-fadeIn': show, 'animate-fadeOut': !show },
          )}
        >
          <IoIosArrowUp className='m-auto text-xl lg:text-2xl' />
        </button>
      )}
    </>
  );
};
