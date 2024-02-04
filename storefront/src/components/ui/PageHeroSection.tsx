import { Breadcrumb } from '@/components';

interface PageHeroSectionProps {
  title: string;
}

export const PageHeroSection: React.FC<PageHeroSectionProps> = ({ title }) => {
  return (
    <div className='flex w-full justify-center bg-slate-100 py-20 md:min-h-[250px] lg:min-h-[288px]'>
      <div className='relative flex w-full flex-col items-center justify-center'>
        <h2 className='text-center text-xl font-bold text-brand-dark md:text-2xl lg:text-3xl 2xl:text-[32px]'>
          <span className='mb-3 block font-bold md:mb-4 lg:mb-5 2xl:mb-7 '>{title}</span>
        </h2>

        <Breadcrumb />
      </div>
    </div>
  );
};
