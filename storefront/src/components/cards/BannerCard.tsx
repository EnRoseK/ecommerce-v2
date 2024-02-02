import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface BannerCardProps {
  effectActive?: boolean;
  className?: string;
}

export const BannerCard: React.FC<BannerCardProps> = ({ effectActive, className }) => {
  return (
    <div className={twMerge('mx-auto', className)}>
      <Link
        href={`#`}
        className={'group relative flex h-full w-full justify-center overflow-hidden'}
      >
        <div className='box-sizing relative inline-block w-full overflow-hidden'>
          <div className='box-sizing block w-full'>
            <svg
              className='block h-auto max-w-full'
              xmlns='http://www.w3.org/2000/svg'
              width={860}
              height={240}
              version='1.1'
            />
          </div>
          <Image
            src={'/assets/images/banner/banner-1.jpg'}
            alt={'Banner'}
            width={0}
            height={0}
            sizes='100vw'
            className='absolute bottom-0 left-0 right-0 top-0 max-h-full min-h-full min-w-full max-w-full object-cover'
          />
        </div>
        {effectActive && (
          <div className='z-5 absolute -left-full top-0 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent to-white opacity-30 group-hover:animate-shine' />
        )}
      </Link>
    </div>
  );
};
