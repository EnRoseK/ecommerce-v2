import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import Image from 'next/image';
import { siteSettings } from '@/constants';

interface LogoProps {
  variant?: 'white' | 'black';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'white', className }) => {
  return (
    <Link href='/' className={twMerge('inline-flex focus:outline-none', className)}>
      {variant === 'black' && (
        <Image
          src={siteSettings.logoBlackUrl}
          width={195}
          height={30}
          alt={siteSettings.siteName}
          loading='eager'
        />
      )}
      {variant === 'white' && (
        <Image
          src={siteSettings.logoUrl}
          width={195}
          height={30}
          alt={siteSettings.siteName}
          loading='eager'
        />
      )}
    </Link>
  );
};
