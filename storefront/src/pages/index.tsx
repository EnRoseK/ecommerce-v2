import { Container, FeaturesCarousel, HeroCarousel } from '@/components';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Container>
      <HeroCarousel />
      <FeaturesCarousel />
    </Container>
  );
};

export default HomePage;
