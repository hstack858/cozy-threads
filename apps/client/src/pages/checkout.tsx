import { Elements } from '@stripe/react-stripe-js';
import { Appearance } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';

import CheckoutForm from '@/components/checkout/CheckoutForm';
import { useCart } from '@/contexts/CartContext';
import { useStripeContext } from '@/contexts/StripeContext';

const Checkout: React.FC = () => {
  const [clientSecret, setClientSecret] = useState<string>('');
  const { totalAmount } = useCart();
  const { stripePromise } = useStripeContext();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (totalAmount > 0) {
      try {
        fetch(`${API_URL}/create-payment-intent`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: totalAmount * 100,
          }),
        })
          .then(response => response.json())
          .then(({ clientSecret }) => setClientSecret(clientSecret));
      } catch {
        window.location.href = '/failure';
      }
    }
  }, [API_URL, totalAmount]);

  const appearance: Appearance = {
    theme: 'flat',
    variables: {
      fontFamily: 'Montserrat, sans-serif',
      colorBackground: 'transparent',
      colorText: 'var(--dark-brown)',
      colorPrimary: 'var(--light-brown)',
    },
  };

  return (
    <div
      style={{
        padding: '2rem',
        backgroundColor: '#f5e6d0',
        minHeight: '100vh',
        fontFamily: 'Montserrat, sans-serif',
        color: '#251210',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '3rem',
          fontWeight: 600,
          marginBottom: '2rem',
          color: 'var(--dark-brown)',
        }}
      >
        Checkout
      </h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Checkout;
