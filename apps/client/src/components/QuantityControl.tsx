import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

import { Product } from '@/constants/products';
import { useCart } from '@/contexts/CartContext';

interface QuantityControlProps {
  item: Product;
}

const QuantityControl: React.FC<QuantityControlProps> = ({ item }) => {
  const { getItemQuantity, addToCart, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    setQuantity(getItemQuantity(item.id));
  }, [getItemQuantity, item.id]);

  return (
    <span
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '6rem',
        height: '2.5rem',
        padding: '0 0.5rem',
        border: '1px solid #ccc',
        borderRadius: '0.375rem',
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <button
        disabled={quantity === 0}
        onClick={() => {
          removeFromCart(item.id);
          setQuantity(quantity - 1);
        }}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          fontSize: '1rem',
          cursor: quantity === 0 ? 'not-allowed' : 'pointer',
        }}
        data-test="remove-from-cart"
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>

      <span style={{ color: '#251210' }}>{quantity}</span>

      <button
        onClick={() => {
          addToCart({
            id: item.id,
            quantity: quantity + 1,
            amount: item.amount,
            name: item.name,
          });
          setQuantity(quantity + 1);
        }}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
        data-test="add-to-cart"
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </span>
  );
};

export default QuantityControl;
