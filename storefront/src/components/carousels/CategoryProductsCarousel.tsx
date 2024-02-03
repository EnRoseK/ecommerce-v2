import Image from 'next/image';
import Link from 'next/link';
import { ProductsCarousel } from '@/components';

const children = [
  {
    id: 1,
    name: 'Bags & Accessories',
    slug: 'arugula',
  },
  {
    id: 2,
    name: 'Electronic & Digital',
    slug: 'asparagus',
  },
  {
    id: 3,
    name: 'Garden & Kitchen',
    slug: 'beets',
  },
  {
    id: 4,
    name: 'Home & Kitchen',
    slug: 'cabbages',
  },
  {
    id: 5,
    name: 'Lighting & Lamps',
    slug: 'arugula',
  },
  {
    id: 6,
    name: 'Home Accessories',
    slug: 'arugula',
  },
  {
    id: 7,
    name: 'Fashion Scarves',
    slug: 'arugula',
  },
];

const breakpoints = {
  '1536': {
    slidesPerView: 5,
  },
  '1280': {
    slidesPerView: 4,
  },
  '1024': {
    slidesPerView: 4,
  },
  '640': {
    slidesPerView: 3,
  },
  '360': {
    slidesPerView: 2,
  },
  '0': {
    slidesPerView: 1,
  },
};

interface CategoryProductsCarouselProps {
  prevButtonId?: string;
  nextButtonId?: string;
}

export const CategoryProductsCarousel: React.FC<CategoryProductsCarouselProps> = ({
  prevButtonId,
  nextButtonId,
}) => {
  return (
    <div className='mb-8 lg:mb-12'>
      <div className='border border-black/10 xl:flex'>
        <div className='relative min-h-[365px] overflow-hidden p-7 xl:w-[420px]'>
          <div className='absolute inset-0'>
            <Image
              src={'/assets/images/category/cate_1.jpg'}
              alt={'Product Image'}
              width={419}
              height={365}
              quality={75}
              className='object-cover'
            />
          </div>

          <div className='relative z-10 h-full'>
            <h3 className='relative z-10 border-0 pb-3 text-[20px] font-medium capitalize text-skin-base before:absolute before:-bottom-0.5 before:z-[2] before:inline-block before:h-0.5 before:w-[50px] before:bg-skin'>
              Electronic & Digital
            </h3>

            <ul className='pt-4 text-[14px] leading-7'>
              {children.map((child) => {
                return (
                  <li className='pb-2 hover:text-skin-primary' key={child.id}>
                    <Link href={'#'}>{child.name}</Link>
                  </li>
                );
              })}
              <li className=' text-skin-primary hover:text-skin-primary'>
                <Link href='#'>View all categories</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='w-full p-2.5 xl:w-[calc(100%_-_420px)]'>
          <ProductsCarousel
            breakpoints={breakpoints}
            prevButtonId={prevButtonId}
            nextButtonId={nextButtonId}
          />
        </div>
      </div>
    </div>
  );
};
