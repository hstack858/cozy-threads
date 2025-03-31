import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import type { AppProps } from 'next/app';

import Layout from '@/components/layout/Layout';
import { CartProvider } from '@/contexts/CartContext';
import '@/styles/globals.css';
import { StripeProvider } from '@/contexts/StripeContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <StripeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StripeProvider>
    </CartProvider>
  );
}
