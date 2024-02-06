import { Divider, SignInForm } from '@/components';
import { NextPage } from 'next';

const SignInPage: NextPage = () => {
  return (
    <>
      <Divider />
      <div className='flex items-center justify-center'>
        <div className='px-4 py-12 sm:py-16 md:px-6 lg:px-8 lg:py-20 2xl:px-10'>
          <SignInForm isPopup={false} className='rounded-lg border border-border-base' />
        </div>
      </div>
      <Divider />
    </>
  );
};

export default SignInPage;
