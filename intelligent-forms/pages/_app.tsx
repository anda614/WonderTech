import type { AppProps } from 'next/app';
//import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
//mport '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider {...{ session, refetchOnWindowFocus: true, refetchInterval: 3000 }}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
