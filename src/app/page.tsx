// import React, { Children } from 'react';
// import type { AppProps } from 'next/app';
// import Header from '@/components/header/Header';
// import RootLayout from './layout';

// export default function MyApp() {
//   return (
//     <RootLayout>
//       <Header />
//       {/* <Component {...pageProps} /> */}

//       {/* <Header />
//       <Component {...pageProps} /> */}

//     </RootLayout>
//   );
// }

import { AppProps } from 'next/app';
import { AuthProvider } from '../context/auth-context';
import RootLayout from './layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </AuthProvider>
  );
}

export default MyApp;
