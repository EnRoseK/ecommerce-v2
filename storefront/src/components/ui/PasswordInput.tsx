import { Eye, EyeOff } from '@/icons';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface PasswordInputProps extends React.ComponentProps<'input'> {
  label?: string;
  error?: string;
  inputClassName?: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  error,
  inputClassName,
  className,
  id,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={id}
          className='mb-3 block cursor-pointer text-sm font-normal leading-none text-brand-dark opacity-70'
        >
          {label}
        </label>
      )}
      <div className='relative'>
        <input
          id={id}
          type={showPassword ? 'text' : 'password'}
          className={twMerge(
            'text-input font-body h-11 w-full appearance-none rounded-md border border-border-two px-4 py-2 text-13px text-brand-dark  placeholder-[#B3B3B3] focus:border-2 focus:border-brand focus:outline-none focus:ring-0 md:h-12 md:px-5 lg:text-sm',
            inputClassName,
          )}
          {...rest}
        />
        <label
          htmlFor={id}
          className='absolute right-4 top-5 -mt-2 cursor-pointer text-brand-dark text-opacity-30'
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <EyeOff className='h-6 w-6' /> : <Eye className='h-6 w-6' />}
        </label>
      </div>
      {error && <p className='my-2 text-13px text-brand-danger text-opacity-70'>{error}</p>}
    </div>
  );
};
