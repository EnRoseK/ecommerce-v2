import {
  BannerGridTwo,
  CategoryProductsCarousel,
  Container,
  FeaturesCarousel,
  HeroCarousel,
  ProductsCarousel,
} from '@/components';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Container>
      <HeroCarousel />
      <FeaturesCarousel />
      <ProductsCarousel sectionTitle='Best seller' className='mb-8' />
      <BannerGridTwo className='mb-8 lg:mb-12' gridClassName='xl:gap-5' />
      <CategoryProductsCarousel />
      <BannerGridTwo className='mb-8 lg:mb-12' gridClassName='xl:gap-5' />
      <CategoryProductsCarousel />
    </Container>
  );
};

export default HomePage;
