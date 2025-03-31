import Cart from './Cart';
import PaymentInformation from './PaymentInformation';

const CheckoutForm: React.FC = () => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '3rem',
      width: '100%',
    }}
  >
    <PaymentInformation />
    <Cart />
  </div>
);

export default CheckoutForm;
