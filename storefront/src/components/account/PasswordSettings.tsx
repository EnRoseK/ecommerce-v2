import { Button, Heading, PasswordInput } from '@/components';

export const PasswordSettings: React.FC = () => {
  return (
    <>
      <Heading variant='titleLarge'>Change Password</Heading>
      <div className='mt-6 flex w-full flex-col lg:mt-7 lg:w-10/12 2xl:w-9/12'>
        <form action='' className='mx-auto flex w-full flex-col justify-center'>
          <div className='flex flex-col space-y-5 lg:space-y-7'>
            <PasswordInput label='Current Password' id='currentPassword' />
            <PasswordInput label='New Password' id='newPassword' />
            <div className='relative mt-3'>
              <Button className='w-full sm:w-auto' variant='formButton' type='submit'>
                Change password
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
