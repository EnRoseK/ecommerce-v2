import { Button, Input, Textarea } from '@/components';

export const ContactForm: React.FC = () => {
  return (
    <form className='space-y-5'>
      <Input variant='solid' label='Full Name' />
      <Input variant='solid' label='Email Address' type='email' />
      <Input variant='solid' label='Phone' type='tel' />
      <Textarea label='Message' variant='solid' />
      <Button variant='formButton' className='w-full' type='submit'>
        Send message
      </Button>
    </form>
  );
};
