import { useEffect, useState } from "react";
import { CartContext, CartItem } from "../context/cart-context";
import { CartModal } from "../components/cart-modal/cart-modal";
import { useMediaQuery } from "react-responsive";

export const CartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 425 });

  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);

  const addItem = (newItem: CartItem) => {
    setItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === newItem.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + newItem.quantity } : item,
        );
      } else {
        return [...prevItems, newItem];
      }
    });
  };

  const removeItem = (id: CartItem["id"]) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const openCartModal = () => setIsOpen(true);
  const closeCartModal = () => setIsOpen(false);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, openCartModal, closeCartModal }}>
      {children}
      <CartModal
        isOpen={isOpen}
        items={items}
        closeModal={closeCartModal}
        removeItem={removeItem}
      />
    </CartContext.Provider>
  );
};
