import classNames from 'classnames';
import { Overlay } from '@/components';

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
          'fixed bottom-0 top-0 z-[1000] w-full overflow-hidden bg-white shadow-drawer min-[500px]:w-[500px]',
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
      <Overlay show={open} onAnimationEnd={onAnimationEnd} onClickHandler={closeHandler} />
    </>
  );
};
