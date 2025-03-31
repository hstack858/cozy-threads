import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type CartItem = {
  id: string;
  name: string;
  amount: number;
  quantity: number;
};

type CartContextType = {
  cart: Map<string, CartItem>;
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  totalAmount: number;
  cartSize: number;
  getItemQuantity: (itemId: string) => number;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Map<string, CartItem>>(new Map());
  const [hasInitialized, setHasInitialized] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !hasInitialized) {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        const parsed = JSON.parse(storedCart);
        const restoredMap = new Map<string, CartItem>(Object.entries(parsed));
        setCart(restoredMap);
      }
      setHasInitialized(true);
    }
  }, [hasInitialized]);

  useEffect(() => {
    if (hasInitialized) {
      const cartObject = Object.fromEntries(cart);
      localStorage.setItem('cart', JSON.stringify(cartObject));
    }
  }, [cart, hasInitialized]);

  const addToCart = (item: CartItem) => {
    const newCart = new Map(cart);

    if (newCart.has(item.id)) {
      const existingItem = newCart.get(item.id)!;
      newCart.set(item.id, {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      });
    } else {
      newCart.set(item.id, {
        ...item,
        quantity: 1,
      });
    }

    setCart(newCart);
  };

  const removeFromCart = (itemId: string) => {
    const newCart = new Map(cart);

    if (newCart.has(itemId)) {
      const existingItem = newCart.get(itemId)!;
      if (existingItem.quantity > 1) {
        newCart.set(itemId, {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        });
      } else {
        newCart.delete(itemId);
      }
    }

    setCart(newCart);
  };

  const totalAmount =
    Math.round(
      Array.from(cart.values()).reduce((acc, item) => acc + item.amount * item.quantity, 0) * 100
    ) / 100;

  const cartSize = Array.from(cart.values()).reduce((acc, item) => acc + item.quantity, 0);

  const getItemQuantity = (itemId: string) => (cart.has(itemId) ? cart.get(itemId)!.quantity : 0);

  const clearCart = () => {
    setCart(new Map());
    localStorage.removeItem('cart');
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        totalAmount,
        cartSize,
        getItemQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
