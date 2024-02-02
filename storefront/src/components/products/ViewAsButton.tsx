import classNames from 'classnames';
import { PiListFill } from 'react-icons/pi';
import { TfiLayoutGrid3Alt } from 'react-icons/tfi';

interface ViewAsButtonProps {
  viewAs: 'grid' | 'list';
  setViewAs: React.Dispatch<React.SetStateAction<'grid' | 'list'>>;
}

export const ViewAsButton: React.FC<ViewAsButtonProps> = ({ viewAs, setViewAs }) => {
  return (
    <div className='flex items-center gap-1'>
      <div className='p-2 text-skin-base text-opacity-70'>View as:</div>
      <div className='flex items-center'>
        <button
          onClick={() => setViewAs('grid')}
          type='button'
          className={classNames(
            'flex h-[38px] w-[38px] items-center justify-center border border-[#dedede] p-[5px]',
            { 'text-skin-base': viewAs === 'grid', 'text-[#dedede]': viewAs !== 'grid' },
          )}
        >
          <TfiLayoutGrid3Alt size={14} />
        </button>
        <button
          onClick={() => setViewAs('list')}
          type='button'
          className={classNames(
            'flex h-[38px] w-[38px] items-center justify-center border border-l-0 border-[#dedede] p-[5px]',
            { 'text-skin-base': viewAs === 'list', 'text-[#dedede]': viewAs !== 'list' },
          )}
        >
          <PiListFill size={18} />
        </button>
      </div>
    </div>
  );
};
