import { CarouselNavigation, HeroCard } from '@/components';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const HeroCarousel: React.FC = () => {
  return (
    <div className='mb-7 mt-6'>
      <div className='relative'>
        <Swiper
          modules={[Pagination, Navigation]}
          navigation={{
            prevEl: '#hero__carousel-prev',
            nextEl: '#hero__carousel-next',
            disabledClass: 'pointer-events-none hidden',
          }}
          pagination={{
            clickable: true,
            el: '.hero__carousel-pagination',
            bulletClass: 'hero__carousel-pagination__bullet',
            bulletActiveClass: 'hero__carousel-pagination__bullet-active',
          }}
        >
          {Array.from(Array(3)).map((_, index) => {
            return (
              <SwiperSlide key={index}>
                <HeroCard />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className='hero__carousel-pagination absolute bottom-4 z-10 flex w-full items-center justify-center gap-2 lg:gap-2.5'></div>

        <CarouselNavigation prevButtonId='hero__carousel-prev' nextButtonId='hero__carousel-next' />
      </div>
    </div>
  );
};
