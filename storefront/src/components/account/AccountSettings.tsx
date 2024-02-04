import React from 'react';
import { Button, Input } from '@/components';

export const AccountSettings: React.FC = () => {
  return (
    <div className='flex w-full flex-col'>
      {/* Personal Information Form */}
      <h2 className='mb-5 text-[20px] font-medium text-fill-base md:mb-6 lg:-mt-1 lg:mb-7 xl:text-[20px] xl:leading-8'>
        Personal Information
      </h2>
      <form className='mx-auto flex w-full flex-col justify-center'>
        <div className='pb-7 md:pb-8 lg:pb-10'>
          <div className='flex flex-col space-y-4 sm:space-y-5'>
            <div className='-mx-1.5 flex flex-col space-y-4 sm:flex-row sm:space-y-0 md:-mx-2.5'>
              <Input
                label='First Name'
                id='firstName'
                name='firstName'
                variant='solid'
                className='w-full px-1.5 sm:w-1/2 md:px-2.5'
              />
              <Input
                id='lastName'
                name='lastName'
                label='Last Name'
                variant='solid'
                className='w-full px-1.5 sm:w-1/2 md:px-2.5'
              />
            </div>
            <div className='-mx-1.5 flex flex-col space-y-4 sm:flex-row sm:space-y-0 md:-mx-2.5'>
              <Input
                label='Phone'
                id='phone'
                name='phone'
                variant='solid'
                className='w-full px-1.5 sm:w-1/2 md:px-2.5'
                type='tel'
              />

              <Input
                label='Email'
                id='email'
                name='email'
                variant='solid'
                className='w-full px-1.5 sm:w-1/2 md:px-2.5'
                type='email'
              />
            </div>
          </div>
        </div>

        <div className='relative mt-5 flex pb-2 sm:ml-auto lg:pb-0'>
          <Button type='submit' variant='formButton' className='w-full sm:w-auto'>
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};
