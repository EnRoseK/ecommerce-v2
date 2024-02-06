import { twMerge } from 'tailwind-merge';
import { Button, CloseButton, Input, PasswordInput, Switch } from '@/components';
import Image from 'next/image';
import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';

interface SignInFormProps {
  className?: string;
  isPopup: boolean;
  closeHandler?: () => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ className, isPopup, closeHandler }) => {
  const [remember, setRemember] = useState<boolean>(false);

  return (
    <div
      className={twMerge(
        'relative w-full md:w-[720px] lg:w-[920px] xl:w-[1000px] 2xl:w-[1200px]',
        className,
      )}
    >
      {isPopup && (
        <CloseButton
          onClickHandler={() => {
            if (closeHandler) {
              closeHandler();
            }
          }}
        />
      )}

      <div className='mx-auto flex overflow-hidden rounded-lg bg-brand-light'>
        <div className='relative hidden md:block md:w-1/2 lg:w-[55%] xl:w-[60%]'>
          <Image src='/assets/images/login.jpg' alt='signin' fill className='h-full object-cover' />
        </div>
        <div className='flex w-full flex-col justify-center rounded-md px-4 py-6 sm:px-8 sm:py-10 md:w-1/2 md:px-6 lg:w-[45%] lg:px-8 xl:w-[40%] xl:px-12'>
          <div className='mb-6 text-center'>
            <h4 className='text-xl font-semibold text-brand-dark sm:pt-3 sm:text-2xl '>
              Sign into you account
            </h4>
            <div className='text-body mb-1 mt-3 text-center text-sm sm:text-15px'>
              Don’t have an account?
              <button
                type='button'
                className='ml-1 text-sm text-brand hover:no-underline focus:outline-none sm:text-15px'
              >
                Create account
              </button>
            </div>
          </div>
          <form className='flex flex-col justify-center' noValidate>
            <div className='flex flex-col space-y-3.5'>
              <Input label='Email Address' type='email' variant='solid' />
              <PasswordInput label='Password' />
              <div className='flex items-center justify-center'>
                <div className='flex shrink-0 items-center'>
                  <label className='relative inline-block h-[22px] cursor-pointer'>
                    <Switch checked={remember} onChange={setRemember} />
                  </label>
                  <label className='text-heading mt-1 shrink-0 cursor-pointer pl-2.5 text-sm'>
                    Remember me
                  </label>
                </div>
                <div className='ml-auto mt-[3px] flex '>
                  <button
                    type='button'
                    className='text-heading pl-3 text-right text-sm hover:text-brand-dark hover:no-underline focus:text-brand-dark focus:outline-none '
                  >
                    Forgot Password
                  </button>
                </div>
              </div>
              <div className='relative'>
                <Button
                  type='submit'
                  className='font-15px md:font-15px mt-2 h-11 w-full tracking-normal md:h-12'
                  variant='formButton'
                >
                  Sign In
                </Button>
              </div>
            </div>
          </form>
          <div className='relative flex flex-col items-center justify-center text-sm'>
            <span className='mt-6 text-sm text-brand-dark opacity-70'>or</span>
          </div>

          <div className='mt-5 flex justify-center space-x-2.5'>
            <button className='group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border-one hover:border-brand focus:border-brand focus:outline-none'>
              <FaFacebook className='h-4 w-4 text-brand-dark text-opacity-50 group-hover:text-brand ' />
            </button>
            <button className='group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border-one hover:border-brand focus:border-brand focus:outline-none'>
              <FaTwitter className='h-4 w-4 text-brand-dark text-opacity-50 group-hover:text-brand' />
            </button>
            <button className='group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border-one hover:border-brand focus:border-brand focus:outline-none'>
              <FaLinkedinIn className='h-4 w-4 text-brand-dark text-opacity-50 group-hover:text-brand' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
