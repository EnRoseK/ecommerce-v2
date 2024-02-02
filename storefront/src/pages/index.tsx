import { Container, HeroCarousel } from '@/components';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Container>
      <HeroCarousel />
    </Container>
  );
};

export default HomePage;
