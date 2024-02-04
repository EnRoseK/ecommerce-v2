import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { cva, VariantProps } from 'class-variance-authority';
import { useState } from 'react';
import { useAnimation, useStopScroll } from '@/hooks';
import { CloseIcon, SearchIcon } from '@/icons';
import { Overlay, SearchProductCard } from '@/components';

const searchVariants = cva(
  'text-heading outline-none w-full h-[45px] pl-5 md:pl-6 pr-14 md:pr-16 bg-brand-light text-brand-dark text-sm rounded-full transition-all duration-200 focus:border-brand focus:ring-0 placeholder:text-brand-dark/50',
  {
    variants: {
      variant: {
        border: 'border border-border-base',
        fill: 'border-0 bg-fill-two',
      },
    },
    defaultVariants: {
      variant: 'border',
    },
  },
);

interface SearchbarProps extends VariantProps<typeof searchVariants> {
  className?: string;
  showOverlay?: boolean;
  overlayClickHandler?: () => void;
}

export const Searchbar: React.FC<SearchbarProps> = ({
  className = 'md:w-[730px] 2xl:w-[800px]',
  variant,
  showOverlay = false,
  overlayClickHandler,
}) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(showOverlay || false);

  const [renderFocused, onAnimationEnd] = useAnimation(focused);
  const [renderResult, onAnimationEndResult] = useAnimation(focused && !!searchValue);
  useStopScroll(focused);

  return (
    <div className={twMerge('w-full', className)}>
      {/* Searchbox */}
      <div
        className={classNames(
          'relative flex w-full shrink-0 flex-col justify-center transition-none',
          {
            'z-auto': !focused,
            'z-[1000]': focused,
          },
        )}
      >
        <div className='mx-auto flex w-full flex-col'>
          <form noValidate className='relative flex w-full rounded-md'>
            <label className='flex flex-1 items-center py-0.5'>
              <input
                className={searchVariants({ variant })}
                placeholder='Search'
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </label>
            {searchValue ? (
              <button
                onClick={() => setSearchValue('')}
                type='button'
                className='hover:text-heading absolute right-0 top-0 flex h-full w-14 items-center justify-center  outline-none focus:outline-none md:w-16'
              >
                <CloseIcon width={17} height={17} className='text-brand-dark text-opacity-40' />
              </button>
            ) : (
              <span className='absolute right-0 top-0 flex h-full w-14 shrink-0 items-center justify-center focus:outline-none md:w-16'>
                <SearchIcon width={20} height={20} className='text-brand-dark text-opacity-40' />
              </span>
            )}
          </form>
        </div>

        {/* Search result */}
        {renderResult && (
          <div
            className={classNames(
              'absolute left-0 top-[56px] grid w-full overflow-hidden rounded-md bg-brand-light shadow-dropDown',
              {
                'animate-collapseOpen': focused && searchValue,
                'animate-collapseClose': !focused || !searchValue,
              },
            )}
            onAnimationEnd={onAnimationEndResult}
          >
            <div className='overflow-hidden'>
              <div className='max-h-[380px] w-full overflow-y-auto'>
                {Array.from(Array(5)).map((_, index) => {
                  return (
                    <div
                      key={index}
                      className='scroll-snap-align-start border-b border-black/5 py-2.5 pe-10 ps-5 hover:bg-fill-four'
                    >
                      <SearchProductCard />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay */}
      {renderFocused && (
        <Overlay
          show={focused}
          onAnimationEnd={onAnimationEnd}
          onClickHandler={() => {
            setFocused(false);
            if (overlayClickHandler) {
              overlayClickHandler();
            }
          }}
        />
      )}
    </div>
  );
};
