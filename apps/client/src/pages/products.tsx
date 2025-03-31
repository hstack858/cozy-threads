import Product from '@/components/Product';
import { products } from '@/constants/products';

const Products: React.FC = () => (
  <div
    style={{
      display: 'grid',
      gap: '2rem',
      gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
      margin: '2rem 3rem',
    }}
  >
    {products.map(product => (
      <Product key={product.id} item={product} />
    ))}
  </div>
);

export default Products;
