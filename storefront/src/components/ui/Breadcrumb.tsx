import Link from 'next/link';
import { IoChevronForward, IoHomeOutline } from 'react-icons/io5';

export const Breadcrumb: React.FC = () => {
  return (
    <div className='flex items-center'>
      <ol className='flex w-full items-center gap-2.5 overflow-hidden'>
        <li className='text-sm text-brand-muted  hover:text-brand-dark'>
          <Link href='/' className='flex items-center'>
            <span>
              <IoHomeOutline size={16} className='mr-1.5 text-brand-dark' />
            </span>
            Home
          </Link>
        </li>

        <li>
          <IoChevronForward className='text-base text-brand-dark text-opacity-40' />
        </li>

        <li className='text-sm text-brand-muted  hover:text-brand-dark'>
          <Link href='/' className='flex items-center'>
            Products
          </Link>
        </li>
      </ol>
    </div>
  );
};
