import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CarouselNavigation, CategoryGridCard } from '@/components';

const breakpoints = {
  '1480': {
    slidesPerView: 6,
  },
  '1280': {
    slidesPerView: 5,
  },
  '1024': {
    slidesPerView: 3,
  },
  '768': {
    slidesPerView: 3,
  },
  '600': {
    slidesPerView: 3,
  },
  '0': {
    slidesPerView: 2,
  },
};

export const CategoriesCarousel: React.FC = () => {
  return (
    <div className='mb-6 lg:mb-8'>
      <div className='mb-2 md:mb-2'>
        <div className='relative z-10 mb-6 border-b-2 border-b-[#ebebeb] pb-3 capitalize before:absolute before:-bottom-0.5 before:z-[2] before:inline-block before:h-0.5 before:w-[50px] before:bg-skin'>
          <h2 className='text-[20px] font-medium text-fill-base xl:text-[20px] xl:leading-8'>
            Shop by Categories
          </h2>
        </div>
      </div>

      <div className='relative'>
        <Swiper
          modules={[Navigation]}
          breakpoints={breakpoints}
          navigation={{
            prevEl: '#categories__carousel-prev',
            nextEl: '#categories__carousel-next',
            disabledClass: 'hidden pointer-events-none',
          }}
        >
          {Array.from(Array(8)).map((_, index) => {
            return (
              <SwiperSlide key={index}>
                <CategoryGridCard />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <CarouselNavigation
          prevButtonId='categories__carousel-prev'
          nextButtonId='categories__carousel-next'
          prevButtonClassName='-left-2 md:-left-2.5 -translate-y-1/2'
          nextButtonClassName='-right-2 lg:-right-2.5 -translate-y-1/2'
        />
      </div>
    </div>
  );
};
