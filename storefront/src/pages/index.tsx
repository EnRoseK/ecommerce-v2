import {
  BannerGridTwo,
  CategoriesCarousel,
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
      <ProductsCarousel
        sectionTitle='Best seller'
        className='mb-8'
        prevButtonId='products-best__carousel-prev'
        nextButtonId='products-best__carousel-next'
      />
      <BannerGridTwo className='mb-8 lg:mb-12' gridClassName='xl:gap-5' />
      <CategoryProductsCarousel
        prevButtonId='category-one-products__carousel-prev'
        nextButtonId='category-one-products__carousel-next'
      />
      <BannerGridTwo className='mb-8 lg:mb-12' gridClassName='xl:gap-5' />
      <CategoryProductsCarousel
        prevButtonId='category-two-products__carousel-prev'
        nextButtonId='category-two-products__carousel-next'
      />
      <CategoriesCarousel />
    </Container>
  );
};

export default HomePage;
