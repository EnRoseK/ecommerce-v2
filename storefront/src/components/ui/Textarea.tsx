import { VariantProps, cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const textareaVariants = cva(
  'px-4 py-3 flex items-center w-full rounded appearance-none text-brand-dark text-13px lg:text-sm focus:outline-none focus:ring-0 placeholder-[#B3B3B3]',
  {
    variants: {
      variant: {
        normal:
          'bg-white border border-border-two focus:shadow focus:outline-none focus:border-heading',
        solid: 'border border-border-two focus:bg-white focus:border-2 focus:border-brand',
        outline: 'border border-gray-300 focus:border-primary',
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

interface TextareaProps
  extends React.ComponentProps<'textarea'>,
    VariantProps<typeof textareaVariants> {
  label?: string;
  error?: string;
  inputClassName?: string;
  labelClassName?: string;
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  className,
  inputClassName,
  labelClassName,
  label,
  id,
  variant,
  shadow,
  error,
  ...rest
}) => {
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={id}
          className={`block ${
            labelClassName || 'text-brand-dark opacity-70'
          } mb-3 cursor-pointer text-13px font-normal leading-none lg:text-sm`}
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={twMerge(textareaVariants({ variant, shadow }), inputClassName)}
        rows={4}
        {...rest}
      />
      {error && <p className='my-2 text-13px text-brand-danger text-opacity-70'>{error}</p>}
    </div>
  );
};
