import { Accordion, Container, PageHeroSection } from '@/components';
import { NextPage } from 'next';

const FAQPage: NextPage = () => {
  return (
    <>
      <PageHeroSection title='Frequently Asked Question' />
      <Container>
        <div className='mx-auto flex max-w-2xl flex-col py-12 md:py-20 2xl:max-w-4xl'>
          {Array.from(Array(5)).map((_, index) => {
            return <Accordion key={index} />;
          })}
        </div>
      </Container>
    </>
  );
};

export default FAQPage;
