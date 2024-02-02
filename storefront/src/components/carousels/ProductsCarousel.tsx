import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { twMerge } from 'tailwind-merge';
import { CarouselNavigation, ProductGridCard } from '@/components';
import { SwiperOptions } from 'swiper/types';

const defaultBreakpoints = {
  '1536': {
    slidesPerView: 7,
  },
  '1280': {
    slidesPerView: 5,
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

interface ProductsCarouselProps {
  sectionTitle?: string;
  className?: string;
  breakpoints?: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  };
}

export const ProductsCarousel: React.FC<ProductsCarouselProps> = ({
  sectionTitle,
  className,
  breakpoints = defaultBreakpoints,
}) => {
  return (
    <div className={twMerge('relative', className)}>
      {sectionTitle && (
        <div className='mb-2 md:mb-2'>
          <div className='relative z-10 mb-3 border-b-2 border-b-[#ebebeb] pb-3 capitalize before:absolute before:-bottom-0.5 before:z-[2] before:inline-block before:h-0.5 before:w-[50px] before:bg-skin'>
            <h2 className='text-[20px] font-medium text-fill-base xl:text-[20px] xl:leading-8'>
              {sectionTitle}
            </h2>
          </div>
        </div>
      )}

      <div className='relative h-full'>
        <div className='relative'>
          <Swiper
            modules={[Navigation]}
            breakpoints={breakpoints}
            navigation={{
              nextEl: '#product__carousel-next',
              prevEl: '#product__carousel-prev',
              disabledClass: 'hidden pointer-events-none',
            }}
          >
            {Array.from(Array(12)).map((_, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProductGridCard />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <CarouselNavigation
            prevButtonId='product__carousel-prev'
            nextButtonId='product__carousel-next'
            prevButtonClassName='start-3 -top-12 3xl:top-auto 3xl:-translate-y-2 4xl:-translate-y-10'
            nextButtonClassName='end-3 -top-12 3xl:top-auto transform 2xl:translate-x-0 3xl:-translate-y-2 xl:translate-x-2.5'
          />
        </div>
      </div>
    </div>
  );
};
