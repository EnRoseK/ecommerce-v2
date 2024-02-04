import { VariantProps, cva } from 'class-variance-authority';
import { Component } from '@/components';
import { twMerge } from 'tailwind-merge';

const componentsMap: { [key: string]: React.ElementType } = {
  base: 'h3',
  heading: 'h2',
  mediumHeading: 'h3',
  title: 'h2',
  titleMedium: 'h3',
  titleLarge: 'h2',
  pageHeading: 'h1',
  subHeading: 'h2',
  checkoutHeading: 'h3',
};

const headingVariants = cva('', {
  variants: {
    variant: {
      mediumHeading: 'text-base lg:text-[17px] lg:leading-7 font-medium text-fill-base',
      heading: 'text-lg lg:text-xl xl:text-[22px] xl:leading-8 font-bold text-fill-base',
      base: 'text-15px sm:text-base font-medium text-fill-base',
      title: 'text-base font-medium text-fill-base',
      titleMedium: 'font-semibold text-xl text-fill-base',
      titleLarge: 'text-[20px] xl:text-[20px] font-medium xl:leading-8 text-fill-base',
      pageHeading: 'text-fill-base',
      subHeading: 'text-fill-base',
      checkoutHeading:
        'text-lg lg:text-xl xl:text-[26px] xl:leading-8 font-semibold text-fill-base',
    },
  },
  defaultVariants: {
    variant: 'base',
  },
});

interface HeadingProps extends React.PropsWithChildren, VariantProps<typeof headingVariants> {
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ variant, className, ...rest }) => {
  return (
    <Component
      as={componentsMap[variant || 'base']}
      className={twMerge(headingVariants({ variant }), className)}
      {...rest}
    />
  );
};
