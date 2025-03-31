import Image from 'next/image';

import { Product as ProductType } from '@/constants/products';
import { useCart } from '@/contexts/CartContext';
import styles from '@/styles/components/products/product.module.css';

import QuantityControl from './QuantityControl';

interface ProductProps {
  item: ProductType;
}

const Product: React.FC<ProductProps> = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        borderRadius: '0.75rem',
        backgroundColor: '#f5e6d0',
        fontFamily: "'Playfair Display', serif",
        boxShadow: '0 0.375rem 1.25rem rgba(0, 0, 0, 0.15)',
      }}
    >
      <Image
        src={item.image}
        alt={item.name}
        width={300}
        height={400}
        style={{ borderRadius: '0.5rem', objectFit: 'cover', width: '100%', maxHeight: '20rem' }}
      />
      <h3
        style={{
          margin: '0.25rem 1.5rem',
          textAlign: 'center',
          color: '#251210',
          fontWeight: '400',
          fontSize: '1.5rem',
          letterSpacing: '.07rem',
        }}
      >
        {item.name}
      </h3>
      <p
        style={{
          margin: '0 1.5rem',
          fontSize: '0.95rem',
          color: '#251210',
          fontFamily: 'Montserrat, sans-serif',
          textAlign: 'center',
          fontWeight: '300',
        }}
      >
        {item.description}
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          margin: '1rem 1rem 1rem 0.5rem',
        }}
      >
        <QuantityControl item={item} />
        <button
          className={styles.addToCart}
          onClick={() => {
            addToCart({ ...item, quantity: 1 });
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
