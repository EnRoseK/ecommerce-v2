import 'swiper/css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { MainLayout } from '@/layouts';
import { DrawerProvider, ModalProvider } from '@/providers';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <DrawerProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </DrawerProvider>
    </ModalProvider>
  );
}
