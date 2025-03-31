import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef } from 'react';

import { useCart } from '@/contexts/CartContext';

const Failure: React.FC = () => {
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
        <FontAwesomeIcon icon={faCircleXmark} />
      </div>
      <h1
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '3rem',
          color: 'var(--dark-brown)',
          marginBottom: '1.25rem',
        }}
      >
        Payment Failed
      </h1>
      <p style={styles.message} data-test="thank-you">
        Sorry, our servers are currently down. We have cleared your cart, but please try again in a
        minute!
      </p>
    </div>
  );
};

export default Failure;
