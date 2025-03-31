import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

import links from '@/constants/links';
import { useCart } from '@/contexts/CartContext';
import styles from '@/styles/components/layout/navbar.module.css';

const NavBar: React.FC = () => {
  const { cartSize } = useCart();

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        color: 'var(--dark-brown)',
        backgroundColor: '#f5e6d0',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0.75rem' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="https://cozy-threads-henry.s3.us-east-1.amazonaws.com/cozy-threads-yarn-cropped.png"
            alt="Cozy Threads"
            width={67.2}
            height={50}
            style={{ marginBottom: '0.75rem' }}
          />
          <Image
            src="https://cozy-threads-henry.s3.us-east-1.amazonaws.com/cozy-threads-text-cropped.png"
            alt="Cozy Threads Logo"
            width={278.42}
            height={50}
            className={styles.navLogoText}
          />
        </Link>
        <div style={{ display: 'flex', gap: '2rem', paddingLeft: '3rem' }}>
          {links.map(link => (
            <Link
              key={link.label}
              href={link.path}
              className={`${styles.navLink} ${styles[link.label]}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <Link
        href="/checkout"
        data-test="cart-button"
        style={{
          cursor: cartSize === 0 ? 'not-allowed' : 'pointer',
        }}
        className={styles.cartButton}
        onClick={e => {
          if (cartSize === 0) {
            e.preventDefault();
          }
        }}
      >
        <FontAwesomeIcon icon={faCartShopping} />
        {cartSize > 0 && (
          <span
            data-test="nav-cart-badge"
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '1.2rem',
              height: '1.2rem',
              borderRadius: '50%',
              fontSize: '0.8rem',
              backgroundColor: 'var(--dark-brown)',
              color: 'white',
            }}
          >
            {cartSize}
          </span>
        )}
      </Link>
    </nav>
  );
};
export default NavBar;
