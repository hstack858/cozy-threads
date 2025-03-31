import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';

import styles from '@/styles/components/checkout/payment_information.module.css';

const PaymentInformation: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/submitted`,
      },
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setErrorMessage(error.message ?? '');
    } else {
      setErrorMessage('An unexpected error occured.');
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        padding: '0 2rem 2rem 2rem',
        border: '2px solid var(--dark-brown)',
        borderRadius: '1rem',
        flex: 1,
        minWidth: '19rem',
      }}
    >
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.5rem',
          marginBottom: '1rem',
          textAlign: 'center',
          color: 'var(--dark-brown)',
        }}
      >
        Payment Information
      </h2>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
        onSubmit={handleSubmit}
      >
        <PaymentElement />
        {errorMessage && (
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.5rem',
              textAlign: 'center',
              color: '#df1b41',
            }}
          >
            {errorMessage}
          </p>
        )}
        <button type="submit" className={styles.payNow} data-test="payment-button">
          {loading ? 'Submitting Payment...' : 'Pay Now'}
        </button>
      </form>
    </div>
  );
};

export default PaymentInformation;
