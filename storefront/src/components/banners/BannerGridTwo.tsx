import { twMerge } from 'tailwind-merge';
import { BannerCard } from '@/components';

interface BannerGridTwoProps {
  className?: string;
  gridClassName?: string;
}

export const BannerGridTwo: React.FC<BannerGridTwoProps> = ({
  className = 'mb-3 md:mb-4 lg:mb-5 xl:mb-6',
  gridClassName = '2xl:gap-5',
}) => {
  return (
    <div className={className}>
      <div className={twMerge('grid grid-cols-1 gap-4 xl:grid-cols-2', gridClassName)}>
        {Array.from(Array(2)).map((_, index) => {
          return <BannerCard key={index} effectActive className='w-full overflow-hidden rounded' />;
        })}
      </div>
    </div>
  );
};
