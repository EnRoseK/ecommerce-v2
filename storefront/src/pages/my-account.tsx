import {
  AccountNavigation,
  AccountSettings,
  Container,
  MobileAccountNavigation,
} from '@/components';
import { NextPage } from 'next';
import { useState } from 'react';

const components = [
  {
    slug: 'settings',
    component: AccountSettings,
  },
];

const MyAccountPage: NextPage = () => {
  const [activeTab, setActiveTab] = useState<string>('settings');

  const currentComponent = components.find((comp) => comp.slug === activeTab);

  // TODO: Add other components
  return (
    <div className='border-b border-t border-border-base'>
      <Container>
        <div className='mx-auto pb-12 pt-10 lg:pb-14 xl:pb-16 2xl:pb-20 2xl:pt-12'>
          <div className='flex w-full flex-col lg:flex-row'>
            {/* Mobile Navigation */}
            <div className='lg:hidden'>
              <MobileAccountNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {/* Navigation */}
            <div className='me-7 hidden w-72 flex-shrink-0 lg:block xl:me-8'>
              <AccountNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {/* Content */}
            <div className='mt-4 w-full rounded-md border border-border-base p-4 sm:p-5 lg:mt-0 lg:px-9 lg:py-8 2xl:px-10 2xl:py-10'>
              {currentComponent && <currentComponent.component />}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyAccountPage;
