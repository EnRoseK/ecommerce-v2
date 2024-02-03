import classNames from 'classnames';
import Link from 'next/link';

interface ProductTitleAndPriceProps {
  isProductDetailsModal?: boolean;
}

export const ProductTitleAndPrice: React.FC<ProductTitleAndPriceProps> = ({
  isProductDetailsModal = false,
}) => {
  const containerClassName = classNames({
    'pb-4 lg:pb-8': isProductDetailsModal,
    'pb-5 pt-5 lg:pt-0': !isProductDetailsModal,
  });

  const titleClassName =
    '-mt-1.5 mb-2 block text-lg font-medium text-brand-dark hover:text-brand md:mb-2.5 md:text-xl xl:text-2xl';
  const title = '[Sample] Chemex Coffeemaker 3 Cup consetetur sadipscing elitr';

  return (
    <div className={containerClassName}>
      {/* Title */}
      {isProductDetailsModal ? (
        <Link href={'#'} className={titleClassName}>
          {title}
        </Link>
      ) : (
        <h2 className={titleClassName}>{title}</h2>
      )}

      {/* Category */}
      <span className='text-sm font-medium md:text-15px'>Common good</span>

      <div className='mt-5 flex items-center'>
        {/* Price */}
        <div className='text-base font-medium text-brand md:text-xl xl:text-[30px]'>$300</div>
        {/* Base Price */}
        <del className='pl-3 text-sm text-opacity-50 md:text-15px'>$500</del>
        {/* Sales percentage */}
        <span className='ml-2.5 inline-block rounded bg-brand-tree bg-opacity-20 px-2 py-1 text-xs font-bold uppercase text-brand-tree md:text-sm'>
          10% off
        </span>
      </div>
    </div>
  );
};
