import { IoClose } from 'react-icons/io5';

export const SelectedFilters: React.FC = () => {
  return (
    <div className='-mb-3 block'>
      <div className='-mt-1 mb-4 flex items-center justify-between'>
        <h3 className='relative z-10 -mt-1 mb-5 border-b-2 border-b-[#ebebeb] pb-3 text-15px font-medium capitalize text-fill-base before:absolute before:-bottom-0.5 before:z-[2] before:inline-block before:h-0.5 before:w-[50px] before:bg-skin sm:text-base lg:text-xl'>
          Filters
        </h3>
        <button className='flex-shrink text-13px hover:text-brand-dark focus:outline-none'>
          Clear all
        </button>
      </div>
      <div className='-m-1 flex flex-wrap'>
        {Array.from(Array(5)).map((_, index) => {
          return (
            <div
              key={index}
              className='group m-1 flex shrink-0 cursor-pointer items-center rounded-lg border border-border-base px-2.5 py-1.5 text-13px capitalize text-brand-dark hover:border-brand'
            >
              Category
              <IoClose className='text-body group-hover:text-heading -mr-0.5 ml-2 mt-0.5 shrink-0 text-sm' />
            </div>
          );
        })}
      </div>
    </div>
  );
};
