import { VariantProps, cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const inputVariants = cva(
  'py-2 px-4 w-full appearance-none border text-input text-13px lg:text-sm font-body rounded placeholder-[#B3B3B3] min-h-12 text-brand-dark focus:ring-0',
  {
    variants: {
      variant: {
        normal:
          'bg-gray-100 border-gray-300 focus:shadow focus:text-brand-light focus:border-brand',
        solid:
          'text-brand-dark border-border-two focus:border-1 focus:outline-none focus:border-brand h-11 md:h-12',
        outline: 'border-gray-300 focus:border-brand',
      },
      shadow: {
        true: 'focus:shadow',
      },
    },
    defaultVariants: {
      variant: 'normal',
      shadow: false,
    },
  },
);

interface InputProps extends React.ComponentProps<'input'>, VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
  inputClassName?: string;
  labelClassName?: string;
}

export const Input: React.FC<InputProps> = ({
  className,
  inputClassName,
  labelClassName,
  variant,
  shadow,
  id,
  label,
  error,
  ...rest
}) => {
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={id}
          className={`mb-3 block cursor-pointer text-sm font-normal leading-none ${
            labelClassName || 'text-brand-dark text-opacity-70'
          }`}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={twMerge(inputVariants({ variant, shadow }), inputClassName)}
        {...rest}
      />
      {error && <p className='my-2 text-13px text-brand-danger text-opacity-70'>{error}</p>}
    </div>
  );
};
