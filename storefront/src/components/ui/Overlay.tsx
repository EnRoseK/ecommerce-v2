import classNames from 'classnames';

interface OverlayProps {
  variant?: 'black' | 'dark';
  show: boolean;
  onClickHandler: () => void;
  onAnimationEnd: () => void;
}

export const Overlay: React.FC<OverlayProps> = ({
  variant = 'black',
  show,
  onAnimationEnd,
  onClickHandler,
}) => {
  return (
    <div
      onClick={onClickHandler}
      onAnimationEnd={onAnimationEnd}
      className={classNames('fixed inset-0 z-[999]', {
        'bg-black/35': variant === 'black',
        'bg-brand-dark/70': variant === 'dark',
        'animate-fadeIn': show,
        'animate-fadeOut': !show,
      })}
    />
  );
};
