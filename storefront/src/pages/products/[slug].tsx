import { Breadcrumb, Container, ProductSingleDetails, ProductsCarousel } from '@/components';
import { NextPage } from 'next';

const ProductDetailsPage: NextPage = () => {
  return (
    <div className='pb-10 pt-6 lg:pt-7'>
      <Container>
        <Breadcrumb />
        <ProductSingleDetails />
        <ProductsCarousel sectionTitle='Related products' className='"mb-8 lg:mb-12' />
        <ProductsCarousel sectionTitle='Category products' className='"mb-8 lg:mb-12' />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
