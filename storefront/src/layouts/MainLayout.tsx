import { BackToTopButton, Footer, Header, HighlightedBar, MobileNavigation } from '@/components';
import { useState } from 'react';

interface MainLayoutProps extends React.PropsWithChildren {}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [showSearch, setShowSearch] = useState<boolean>(false);

  return (
    <>
      <HighlightedBar />
      <Header showSearch={showSearch} setShowSearch={setShowSearch} />
      <main
        className='relative'
        style={{
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {children}
      </main>
      <Footer />
      <MobileNavigation setShowSearch={setShowSearch} />
      <BackToTopButton />
    </>
  );
};
