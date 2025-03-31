import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef } from 'react';

import { useCart } from '@/contexts/CartContext';

const Submitted: React.FC = () => {
  const { clearCart } = useCart();
  const hasClearedRef = useRef(false);

  useEffect(() => {
    if (!hasClearedRef.current) {
      clearCart();
      hasClearedRef.current = true;
    }
  }, [clearCart]);

  const styles = {
    message: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '1.25rem',
      color: 'var(--dark-brown)',
      marginBottom: '0.625rem',
    },
  };

  return (
    <div
      style={{
        textAlign: 'center',
        borderRadius: '0.625rem',
        maxWidth: '37.5rem',
        margin: '10rem auto',
      }}
    >
      <div
        style={{
          fontSize: '5rem',
          color: 'var(--light-brown)',
          marginBottom: '1.25rem',
        }}
      >
        <FontAwesomeIcon icon={faCircleCheck} />
      </div>
      <h1
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '3rem',
          color: 'var(--dark-brown)',
          marginBottom: '1.25rem',
        }}
      >
        Order Confirmed
      </h1>
      <p style={styles.message} data-test="thank-you">
        Thank you! Your order has been placed successfully.
      </p>
      <p style={styles.message}>We appreciate your business!</p>
      <p style={styles.message}>You will receive an email confirmation shortly.</p>
    </div>
  );
};

export default Submitted;
