import { LabelIcon } from '@/icons';

export const ProductTags: React.FC = () => {
  return (
    <ul className='pt-5 xl:pt-6'>
      <li className='relative top-1 me-2 inline-flex items-center justify-center text-sm text-skin-base text-opacity-80 md:text-15px'>
        <LabelIcon className='me-2 text-[#999]' /> Tags:
      </li>
      <li className='inline-block cursor-pointer p-[3px]'>
        <div className='block rounded border border-border-four px-2 py-1 text-13px hover:bg-fill-four md:text-sm'>
          Electronics
        </div>
      </li>
    </ul>
  );
};
