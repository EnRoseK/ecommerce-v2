import { ContactForm, ContactSupport, Container, PageHeroSection } from '@/components';
import { NextPage } from 'next';

const ContactUsPage: NextPage = () => {
  return (
    <>
      <PageHeroSection title='Contact us' />
      <Container>
        <div className='flex-wrapbg-skin-fill relative z-10 flex w-full xl:py-12'>
          <div className='mb-8 w-full md:w-[53%] md:pe-8 lg:mb-0 lg:pe-0 xl:w-[60%] 2xl:pe-24'>
            <ContactSupport />
          </div>
          <div className='w-full pb-0.5 pt-1.5 md:w-[47%] lg:ps-12 xl:w-[40%]'>
            <ContactForm />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ContactUsPage;
