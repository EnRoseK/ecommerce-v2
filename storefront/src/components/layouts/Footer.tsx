import { Container, Logo } from '@/components';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className='footer-one bg-fill-one text-gray-400'>
      <Container>
        <div className='grid grid-cols-2 gap-5 pb-[50px] pt-10 sm:gap-9 md:grid-cols-7 md:pt-16 lg:gap-11 xl:grid-cols-12 xl:gap-7'>
          <div className='col-span-full pb-10 sm:col-span-1 sm:pb-0 md:col-span-3'>
            <div className='mx-auto max-w-[350px] pb-2 text-sm sm:ms-0'>
              <Logo className='mx-auto mb-3 sm:ms-0 lg:mb-6' />

              <div className='bg-phoneIcon mb-5 min-h-[60px] bg-no-repeat ps-16 xl:ps-20'>
                <p className='mb-0 text-white'>Hotline Free 24/24:</p>
                <p className='text-lg text-brand duration-200 hover:text-white'>(1800)-000-6890</p>
              </div>

              <div className='mb-3'>
                Address: Acme Widgets 123 Widget Street Acmeville, AC 12345 United States of America
              </div>
              <div className='mb-3'>Email: yourexample@email.com</div>
            </div>
          </div>

          {Array.from(Array(3)).map((_, index) => {
            return (
              <div key={index} className='col-span-1 pb-3.5 sm:pb-0 md:col-span-2'>
                <h3 className='mb-4 pb-0.5 text-base font-medium text-white sm:mb-5 lg:mb-6 lg:text-[17px] lg:leading-7'>
                  Information
                </h3>
                <ul className='lg:text-14px flex flex-col space-y-3 text-sm'>
                  <li className='flex items-baseline'>
                    <Link href='#' className=' hover:text-brand'>
                      About us
                    </Link>
                  </li>

                  <li className='flex items-baseline'>
                    <Link href='#' className=' hover:text-brand'>
                      About us
                    </Link>
                  </li>

                  <li className='flex items-baseline'>
                    <Link href='#' className=' hover:text-brand'>
                      About us
                    </Link>
                  </li>
                </ul>
              </div>
            );
          })}

          <div className='col-span-full flex flex-col sm:col-span-1 md:col-span-4 md:col-start-4 xl:col-span-3 xl:col-start-auto'>
            <h3 className='mb-4 text-base font-medium text-white lg:mb-6 lg:pb-0.5 lg:text-[17px] lg:leading-7'>
              Sign Up For Newsletter
            </h3>
            <p className='max-w-[400px] text-sm leading-7 lg:-mt-1 lg:leading-[27px]'>
              Get the latest updates on new products and upcoming sales
            </p>
          </div>
        </div>
      </Container>

      <div className='mb-2 border-t  border-white/10 pb-16 pt-5 sm:mb-0 sm:pb-20 md:pb-5'>
        <Container>
          <div className='flex flex-col text-center md:flex-row md:justify-between'>
            <p className='text-sm leading-7 text-gray-400 lg:leading-[27px]'>
              &copy;&nbsp; Copyright 2024&nbsp;
              <Link className='text-brand hover:text-brand-light' href='#'>
                Javkhlant.
              </Link>
              &nbsp; All rights reserved
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};
