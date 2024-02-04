import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

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
      <div className='pointer-events-none fixed inset-0 z-[999] flex items-center justify-center overflow-y-auto px-2'>
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
      <div
        onClick={closeHandler}
        onAnimationEnd={onAnimationEnd}
        className={classNames('fixed inset-0 z-[998] cursor-pointer bg-brand-dark/70', {
          'animate-fadeIn': open,
          'animate-fadeOut': !open,
        })}
      />
    </>
  );
};
