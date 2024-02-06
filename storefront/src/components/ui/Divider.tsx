import { twMerge } from 'tailwind-merge';

interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className }) => {
  return <div className={twMerge('border-t border-border-base', className)} />;
};

export default Divider;
