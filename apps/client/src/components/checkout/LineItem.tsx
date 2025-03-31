interface LineItemProps {
  name: string;
  amount: number;
  quantity: number;
}

const LineItem: React.FC<LineItemProps> = ({ name, amount, quantity }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.5rem',
      color: 'var(--dark-brown)',
    }}
  >
    <span>
      {name}
      {quantity > 1 ? ` (${quantity})` : ''}
    </span>
    <span>${(amount * quantity).toFixed(2)}</span>
  </div>
);

export default LineItem;
