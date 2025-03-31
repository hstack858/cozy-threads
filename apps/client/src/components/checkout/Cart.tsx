import { CartItem, useCart } from '@/contexts/CartContext';

import LineItem from './LineItem';

const Cart: React.FC = () => {
  const { cart, totalAmount } = useCart();

  return (
    <div
      style={{
        flex: 1,
        fontSize: '1rem',
        borderRadius: '1rem',
        padding: '0 1.5rem 1.5rem 1.5rem',
        height: 'fit-content',
        border: '2px solid var(--dark-brown)',
      }}
    >
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.25rem',
          color: 'var(dark-brown)',
        }}
      >
        Cart
      </h2>
      <div style={{ marginTop: '1rem' }}>
        {Array.from(cart.values()).map((item: CartItem) => (
          <LineItem key={item.id} name={item.name} amount={item.amount} quantity={item.quantity} />
        ))}
      </div>
      <hr style={{ margin: '1rem 0', borderTop: '2px solid var(--dark-brown)' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--dark-brown)' }}>
        <strong>Subtotal</strong>
        <strong>${totalAmount.toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default Cart;
