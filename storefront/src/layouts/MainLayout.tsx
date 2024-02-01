import { Header, HighlightedBar } from '@/components';

interface MainLayoutProps extends React.PropsWithChildren {}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className='flex min-h-screen flex-col'>
      <HighlightedBar />
      <Header />
      <main
        className='relative flex-grow'
        style={{
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {children}
      </main>
    </div>
  );
};
