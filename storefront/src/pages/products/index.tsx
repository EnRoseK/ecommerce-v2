import {
  Breadcrumb,
  Button,
  CategoriesFilters,
  Container,
  GridProducts,
  ListProducts,
  SelectedFilters,
  ViewAsButton,
} from '@/components';
import { FilterIcon } from '@/icons';
import { NextPage } from 'next';
import { useState } from 'react';

const ProductsPage: NextPage = () => {
  const [viewAs, setViewAs] = useState<'grid' | 'list'>('grid');

  // TODO: Finish the filters
  return (
    <Container>
      <div className='pt-6'>
        <Breadcrumb />
      </div>

      <div className='flex pb-16 pt-7 lg:pb-20 lg:pt-11'>
        {/* Filters */}
        <div className='sticky top-16 hidden h-full w-80 shrink-0 pr-8 lg:block xl:pr-16'>
          <div className='space-y-10'>
            <SelectedFilters />
            <CategoriesFilters />
          </div>
        </div>

        {/* Products */}
        <div className='flex-1 lg:-mt-1'>
          {/* Top Filters */}
          <div className='mb-6 flex items-center justify-between'>
            {/* Mobile Filters Button */}
            <button className='flex items-center rounded-md border border-border-base px-4 py-2 text-sm font-semibold text-brand-dark hover:border-brand hover:text-brand focus:outline-none lg:hidden'>
              <FilterIcon />
              <span className='pl-2.5'>Filters</span>
            </button>

            <div className='flex w-full items-center justify-end lg:justify-between'>
              {/* View As Button */}
              <ViewAsButton viewAs={viewAs} setViewAs={setViewAs} />
            </div>
          </div>

          {/* Products */}
          {viewAs === 'grid' && <GridProducts />}
          {viewAs === 'list' && <ListProducts />}
          <div className='pt-8 text-center xl:pt-10'>
            <Button>Load more</Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductsPage;
