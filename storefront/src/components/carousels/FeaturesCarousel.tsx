import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CarouselNavigation, FeaturesCard } from '@/components';

const breakpoints = {
  '1400': {
    slidesPerView: 5,
  },
  '1024': {
    slidesPerView: 4,
  },
  '768': {
    slidesPerView: 2,
  },
  '640 ': {
    slidesPerView: 2,
  },
  '0': {
    slidesPerView: 1,
  },
};

export const FeaturesCarousel: React.FC = () => {
  return (
    <div className='mb-8 h-full md:mb-10'>
      <div className='relative rounded-md border border-black/10 py-6'>
        <Swiper
          modules={[Navigation]}
          breakpoints={breakpoints}
          navigation={{
            nextEl: '#feature__carousel-next',
            prevEl: '#feature__carousel-prev',
            disabledClass: 'hidden pointer-events-none',
          }}
        >
          {Array.from(Array(5)).map((_, index) => {
            return (
              <SwiperSlide key={index}>
                <FeaturesCard />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <CarouselNavigation
          prevButtonId='feature__carousel-prev'
          nextButtonId='feature__carousel-next'
          prevButtonClassName='start-3  3xl:top-auto 3xl:-translate-y-2 4xl:-translate-y-10'
          nextButtonClassName='end-3 3xl:top-auto transform 2xl:translate-x-0 3xl:-translate-y-2'
        />
      </div>
    </div>
  );
};
