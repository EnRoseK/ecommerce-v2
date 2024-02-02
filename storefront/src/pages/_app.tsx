import 'swiper/css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { MainLayout } from '@/layouts';
import { ModalProvider } from '@/providers';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ModalProvider>
  );
}
