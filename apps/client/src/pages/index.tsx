import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/pages/index.module.css';

const Home: React.FC = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '5rem',
      textAlign: 'center',
      fontFamily: "'Playfair Display', 'Georgia', serif",
    }}
  >
    <Image
      src="https://cozy-threads-henry.s3.us-east-1.amazonaws.com/cozy-threads-logo-side-by-side-cropped.png"
      alt="Cozy Threads Logo"
      width={400}
      height={155.19}
    />
    <h1
      style={{
        color: 'var(--dark-brown)',
        fontSize: '3rem',
        fontWeight: '500',
        marginTop: '5rem',
      }}
    >
      Ethically Sourced,
      <br />
      Sustainably Made
    </h1>
    <p
      style={{
        fontSize: '1.66rem',
        color: 'var(--dark-brown)',
        lineHeight: '1.6',
        maxWidth: '30rem',
        marginTop: '0',
      }}
    >
      Discover our collection of high-quality, cozy apparel and accessories, crafted with care from
      sustainable materials.
    </p>
    <Link href="/products" className={styles.shopNowButton}>
      Shop Now
    </Link>
  </div>
);

export default Home;
