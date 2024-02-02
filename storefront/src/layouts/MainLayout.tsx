import { Header, HighlightedBar } from '@/components';

interface MainLayoutProps extends React.PropsWithChildren {}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <HighlightedBar />
      <Header />
      <main
        className='relative'
        style={{
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {children}
      </main>
    </>
  );
};
