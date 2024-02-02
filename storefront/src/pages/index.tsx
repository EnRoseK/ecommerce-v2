import { BannerGridTwo, Container, FeaturesCarousel, HeroCarousel } from '@/components';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Container>
      <HeroCarousel />
      <FeaturesCarousel />
      <BannerGridTwo className='mb-8 lg:mb-12' gridClassName='xl:gap-5' />
      <BannerGridTwo className='mb-8 lg:mb-12' gridClassName='xl:gap-5' />
    </Container>
  );
};

export default HomePage;
