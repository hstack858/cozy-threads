import { Stripe, loadStripe } from '@stripe/stripe-js';
import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

type StripeContextType = {
  stripePromise: Stripe | null;
};

const StripeContext = createContext<StripeContextType | null>(null);

export const StripeProvider = ({ children }: { children: ReactNode }) => {
  const [stripePromise, setStripePromise] = useState<Stripe | null>(null);

  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    fetch(`${API_URL}/key`).then(async r => {
      const { publishableKey } = await r.json();
      setStripePromise(await loadStripe(publishableKey));
    });
  }, []);

  return <StripeContext.Provider value={{ stripePromise }}>{children}</StripeContext.Provider>;
};

export const useStripeContext = () => {
  const context = useContext(StripeContext);
  if (!context) {
    throw new Error('useStripeContext must be used within a StripeProvider');
  }
  return context;
};
