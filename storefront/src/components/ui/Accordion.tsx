import { useAnimation } from '@/hooks';
import classNames from 'classnames';
import { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

export const Accordion: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [renderContent, onAnimationEnd] = useAnimation(expanded);

  return (
    <div className='group mx-auto mb-4 w-full rounded text-brand-light shadow-category'>
      <button
        onClick={() => setExpanded((prev) => !prev)}
        type='button'
        className='flex w-full justify-between px-5 py-4 text-left text-base font-medium text-brand-dark focus:outline-none 2xl:px-6 2xl:py-6'
      >
        <span className='text-heading pr-2 text-sm font-medium leading-relaxed'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, sequi.
        </span>
        <MdKeyboardArrowRight
          className={classNames(
            '-mr-2 shrink-0 text-xl text-brand-dark text-opacity-60 group-hover:text-opacity-100 lg:-mr-1.5 lg:text-2xl',
            { 'rotate-90': expanded },
          )}
        />
      </button>

      {renderContent && (
        <div
          onAnimationEnd={onAnimationEnd}
          className={classNames('grid', {
            'animate-collapseOpen': expanded,
            'animate-collapseClose': !expanded,
          })}
        >
          <div className='overflow-hidden'>
            <div className='-mt-1 px-5 pb-4 text-sm leading-7 text-brand-dark opacity-70 2xl:mt-0 2xl:px-6 2xl:pb-7 2xl:text-15px'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, neque
              laboriosam. Repellendus quasi eaque nulla dolorum reprehenderit, eveniet
              exercitationem fugit sunt! Quidem non maxime et, neque pariatur, tenetur fugit sit
              deserunt iusto ex explicabo nemo maiores autem rerum perferendis vitae, iste labore
              distinctio id a commodi odit consequatur. Eum veniam pariatur magnam laboriosam.
              Voluptates unde consectetur sequi labore impedit nobis illo, illum sunt qui soluta
              perspiciatis! Odio pariatur temporibus tempora officiis voluptatum, quasi
              exercitationem ut, animi ex ratione possimus similique consequatur ea. Provident,
              dolorem nostrum, quisquam pariatur illum commodi soluta itaque perferendis quae
              dolorum temporibus quaerat possimus quibusdam reprehenderit officia.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
