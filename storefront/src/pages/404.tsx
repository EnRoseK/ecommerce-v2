import { HomeIcon, NotFoundIcon } from '@/icons';
import Link from 'next/link';
import { NextPageWithLayout } from '@/pages/_app';
import { NoLayout } from '@/layouts';

const NotFoundPage: NextPageWithLayout = () => {
  return (
    <div className='flex min-h-screen items-center justify-center px-12 py-16 text-center sm:py-20 lg:py-24 xl:py-32'>
      <div className='max-w-md xl:max-w-lg'>
        <NotFoundIcon className='h-[410px] w-full' />
        <p className='pb-7 pt-4 text-15px font-medium leading-7 md:text-base md:leading-8 2xl:text-[18px]'>
          We&apos;re sorry! This page is currently unavailable. We request you to please try again
          later.
        </p>
        <Link
          href='/'
          className='inline-flex items-center rounded-md bg-brand-dark bg-opacity-90 px-4 py-2.5 text-[13px] font-medium leading-4 text-white hover:bg-opacity-100 hover:text-white md:px-6 md:text-sm lg:py-3 lg:text-[15px]'
        >
          <HomeIcon width='14' />
          <span className='mt-0.5 ps-2'> Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

NotFoundPage.getLayout = function getLayout(page): React.ReactNode {
  return <NoLayout>{page}</NoLayout>;
};
