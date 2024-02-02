import classNames from 'classnames';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { twMerge } from 'tailwind-merge';

interface ThumbnailCarouselProps {
  thumbnailClassName?: string;
  galleryClassName?: string;
  isProductModal?: boolean;
}

const gallery = [
  '/assets/images/products/16-1.jpg',
  '/assets/images/products/16.jpg',
  '/assets/images/products/p-1-1.jpg',
  '/assets/images/products/p-1.jpg',
  '/assets/images/products/p-2-1.jpg',
];

export const ThumbnailCarousel: React.FC<ThumbnailCarouselProps> = ({
  thumbnailClassName = 'xl:w-[480px] 2xl:w-[650px]',
  galleryClassName = 'xl:w-[100px] 2xl:w-[120px]',
  isProductModal = false,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div className='relative w-full xl:flex xl:flex-row-reverse'>
      <div
        className={twMerge(
          'relative mb-2.5 w-full overflow-hidden rounded-md md:mb-3 xl:ml-5',
          thumbnailClassName,
        )}
      >
        <Swiper
          thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[Navigation, Thumbs]}
          navigation={{
            prevEl: prevRef.current!, // Assert non-null
            nextEl: nextRef.current!, // Assert non-null
            disabledClass: 'pointer-events-none opacity-0',
          }}
          slidesPerView={1}
          spaceBetween={0}
          className='!h-full'
        >
          {gallery?.map((item, index) => (
            <SwiperSlide key={index} className='flex !h-full items-center justify-center'>
              <Image
                src={item}
                alt={`Product gallery`}
                width={650}
                height={590}
                className='mx-auto rounded-lg'
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='absolute top-2/4 z-10 flex w-full items-center justify-between px-2.5'>
          <div
            ref={prevRef}
            className='flex h-7 w-7 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-brand-light text-base shadow-navigation hover:bg-brand hover:text-brand-light focus:outline-none md:h-8 md:w-8 lg:h-9 lg:w-9 lg:text-lg xl:h-10 xl:w-10 xl:text-xl'
          >
            <IoIosArrowBack />
          </div>
          <div
            ref={nextRef}
            className='flex h-7 w-7 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-brand-light text-base shadow-navigation hover:bg-brand hover:text-brand-light focus:outline-none md:h-8 md:w-8 lg:h-9 lg:w-9 lg:text-lg xl:h-10 xl:w-10 xl:text-xl'
          >
            <IoIosArrowForward />
          </div>
        </div>
      </div>
      {/* End of product main slider */}

      <div className={twMerge('shrink-0', galleryClassName)}>
        <Swiper
          id='productGalleryThumbs'
          className={classNames({
            '!max-h-full': isProductModal,
            '!max-h-[580px]': !isProductModal,
          })}
          onSwiper={setThumbsSwiper}
          spaceBetween={15}
          watchSlidesProgress={true}
          freeMode={true}
          effect={'slide'}
          breakpoints={{
            1280: {
              slidesPerView: 4,
              direction: 'vertical',
            },
            767: {
              slidesPerView: 4,
              direction: 'horizontal',
            },
            0: {
              slidesPerView: 3,
              direction: 'horizontal',
            },
          }}
        >
          {gallery?.map((item, index) => (
            <SwiperSlide
              key={index}
              className='flex !h-full cursor-pointer items-center justify-center overflow-hidden rounded border border-border-base hover:opacity-75'
            >
              <Image
                src={item}
                alt={`Product thumb gallery`}
                width={170}
                height={170}
                style={{ width: 'auto' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
