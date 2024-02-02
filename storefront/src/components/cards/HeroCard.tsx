import Link from 'next/link';

export const HeroCard: React.FC = () => {
  return (
    <div
      className='flex min-h-[320px] w-full items-center rounded bg-cover bg-center bg-no-repeat px-5 py-10 md:min-h-[460px] lg:min-h-[500px] xl:min-h-[550px] xl:py-24'
      style={{
        backgroundImage: `url('/assets/images/hero/slider_1.jpg')`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='inset-0 m-[15px] mx-auto max-w-[480px] sm:absolute md:mt-[30px] md:max-w-[550px] xl:mt-[120px] xl:max-w-[1000px] 2xl:max-w-[1300px]'>
        <div className='text-left'>
          <h2 className='mb-3 text-xl font-medium leading-snug text-brand-light md:mb-4 md:leading-tight lg:text-4xl xl:mb-3 xl:text-5xl xl:leading-[1.3em] 2xl:text-[48px]'>
            Smart Electric New Cooker 2021/2022
          </h2>
          <p className='text-base leading-7 text-brand-light md:text-[15px] md:leading-8 xl:text-lg xl:leading-[1.92em]'>
            This all-in-one cooking solution uses an induction system that reacts.
          </p>

          <Link
            href='#'
            className='mt-5 inline-flex h-[45px] items-center justify-center rounded border-2 px-10 py-2 text-base font-semibold text-brand-light transition duration-300 hover:border-brand  hover:bg-brand md:mt-12'
          >
            Get It Now
          </Link>
        </div>
      </div>
    </div>
  );
};
