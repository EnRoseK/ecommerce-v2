import classNames from 'classnames';

interface DrawerProps extends React.PropsWithChildren {
  position?: 'left' | 'right';
  open: boolean;
  onAnimationEnd: () => void;
  closeHandler: () => void;
}

export const Drawer: React.FC<DrawerProps> = ({
  position = 'right',
  open,
  onAnimationEnd,
  closeHandler,
  children,
}) => {
  return (
    <>
      <div
        onAnimationEnd={onAnimationEnd}
        className={classNames(
          'shadow-drawer fixed bottom-0 top-0 z-[60] w-full overflow-hidden bg-white min-[500px]:w-[500px]',
          {
            'left-0': position === 'left',
            'right-0': position === 'right',
            'animate-drawerRightOpen': position === 'right' && open,
            'animate-drawerRightClose': position === 'right' && !open,
            'animate-drawerLeftOpen': position === 'left' && open,
            'animate-drawerLeftClose': position === 'left' && !open,
          },
        )}
      >
        {children}
      </div>

      {/* Overlay */}
      <div
        onAnimationEnd={onAnimationEnd}
        onClick={closeHandler}
        className={classNames('fixed inset-0 z-50 cursor-pointer bg-brand-dark/70', {
          'animate-fadeIn': open,
          'animate-fadeOut': !open,
        })}
      />
    </>
  );
};
