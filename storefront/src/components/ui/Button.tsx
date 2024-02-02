import { cva, VariantProps } from 'class-variance-authority';
import { ImSpinner2 } from 'react-icons/im';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'group text-[13px] md:text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-medium text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none disabled:pointer-events-none disabled:bg-opacity-50',
  {
    variants: {
      variant: {
        primary:
          'h-12 md:h-14 bg-brand text-brand-light tracking-widest px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-opacity-90',
        border:
          'h-12 md:h-14 bg-brand-light text-base border border-border-four tracking-widest px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4',
        formButton:
          'h-11 md:h-[50px] bg-brand text-brand-light font-manrope px-5 lg:px-6 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-opacity-90 focus:bg-opacity-70',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

interface ButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { loading = false, className, disabled = false, variant, children, ...rest } = props;

  return (
    <button
      className={twMerge(buttonVariants({ variant }), className)}
      {...rest}
      disabled={disabled || loading}
    >
      {children}
      {loading && <ImSpinner2 className='-mr-1 ml-3 h-5 w-5 animate-spin' />}
    </button>
  );
};
