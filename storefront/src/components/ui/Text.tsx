import { VariantProps, cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const textVariants = cva('text-sm leading-7', {
  variants: {
    variant: {
      body: 'lg:leading-[27px]',
      medium: 'lg:text-15px xl:text-base',
      small: 'lg:leading-[1.85em]',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

interface TextProps extends React.PropsWithChildren, VariantProps<typeof textVariants> {
  className?: string;
}

export const Text: React.FC<TextProps> = ({ children, className, variant }) => {
  return <p className={twMerge(textVariants({ variant }), className)}>{children}</p>;
};
