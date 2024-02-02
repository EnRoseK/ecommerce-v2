import classNames from 'classnames';
import { TopHeader, MiddleHeader } from '@/components';

export const Header: React.FC = () => {
  return (
    <>
      <header className={classNames('sticky top-0 z-50 w-full lg:relative')}>
        <div className='z-20 w-full bg-fill-one'>
          <TopHeader />
          <MiddleHeader />
        </div>
      </header>
    </>
  );
};
