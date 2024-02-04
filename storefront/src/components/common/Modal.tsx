import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import { Overlay } from '@/components';

interface ModalProps extends React.PropsWithChildren {
  open: boolean;
  onAnimationEnd: () => void;
  closeHandler: () => void;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onAnimationEnd,
  children,
  closeHandler,
  className,
}) => {
  return (
    <>
      <div className='pointer-events-none fixed inset-0 z-[1000] flex items-center justify-center overflow-y-auto px-2'>
        <div
          onAnimationEnd={onAnimationEnd}
          className={twMerge(
            classNames(
              'pointer-events-auto relative max-h-[90vh] w-full overflow-y-auto rounded-md bg-brand-light lg:max-h-max',
              {
                'animate-modalOpen': open,
                'animate-modalClose': !open,
              },
            ),
            className,
          )}
        >
          {children}
        </div>
      </div>

      {/* Overlay */}
      <Overlay
        show={open}
        onAnimationEnd={onAnimationEnd}
        onClickHandler={closeHandler}
        variant='black'
      />
    </>
  );
};
