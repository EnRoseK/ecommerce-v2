import classNames from 'classnames';

interface ModalProps extends React.PropsWithChildren {
  open: boolean;
  onAnimationEnd: () => void;
  closeHandler: () => void;
}

export const Modal: React.FC<ModalProps> = ({ open, onAnimationEnd, children, closeHandler }) => {
  return (
    <>
      <div className='pointer-events-none fixed inset-0 z-[60] flex items-center justify-center'>
        <div
          onAnimationEnd={onAnimationEnd}
          className={classNames('pointer-events-auto rounded-md bg-brand-light', {
            'animate-modalOpen': open,
            'animate-modalClose': !open,
          })}
        >
          {children}
        </div>
      </div>

      {/* Overlay */}
      <div
        onClick={closeHandler}
        onAnimationEnd={onAnimationEnd}
        className={classNames('fixed inset-0 z-50 cursor-pointer bg-brand-dark/70', {
          'animate-fadeIn': open,
          'animate-fadeOut': !open,
        })}
      />
    </>
  );
};
