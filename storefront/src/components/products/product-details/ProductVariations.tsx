export const ProductVariations: React.FC = () => {
  return (
    <div className='mb-2 pt-0.5'>
      <h4 className='mb-3 text-15px font-normal capitalize text-brand-dark text-opacity-70'>
        Available in:
      </h4>

      <ul className='-mr-2 flex flex-wrap gap-2'>
        <li className='mb-2 flex h-9 cursor-pointer items-center justify-center rounded border p-1 px-3 text-sm font-medium text-brand-dark transition duration-200 ease-in-out hover:border-brand hover:text-brand md:mb-3 md:h-10 md:text-15px'>
          16GB
        </li>
      </ul>
    </div>
  );
};
