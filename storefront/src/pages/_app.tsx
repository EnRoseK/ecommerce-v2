import 'swiper/css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { MainLayout } from '@/layouts';
import { DrawerProvider, ModalProvider } from '@/providers';
import { NextPage } from 'next';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page): React.ReactNode => <MainLayout>{page}</MainLayout>);

  return (
    <ModalProvider>
      <DrawerProvider>{getLayout(<Component {...pageProps} />)}</DrawerProvider>
    </ModalProvider>
  );
}
