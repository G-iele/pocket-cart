import { useEffect, useState } from "react";
import { CartContext, ReservedProduct } from "../context/cart-context";
import { CartModal } from "../components/cart-modal/cart-modal";
import { useMediaQuery } from "react-responsive";
import { Product } from "../context/products-context";

export const CartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [reservedProducts, setReservedProducts] = useState<ReservedProduct[]>(() => {
    try {
      const localData = localStorage.getItem("reservedProducts");
      return localData ? JSON.parse(localData) : [];
    } catch {
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 425 });

  useEffect(() => {
    localStorage.setItem("reservedProducts", JSON.stringify(reservedProducts));
  }, [reservedProducts]);

  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);

  const addItem = (product: Product) => {
    setReservedProducts((prevItems: ReservedProduct[]) => {
      const existing = prevItems.find((item) => item.id === product.id);

      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: (item.quantity + 1) * item.unitPrice,
              }
            : item,
        );
      } else {
        const newReserved: ReservedProduct = {
          id: product.id,
          name: product.name,
          quantity: 1,
          unitPrice: product.price,
          totalPrice: product.price,
        };

        return [...prevItems, newReserved];
      }
    });
  };

  const removeItem = (id: ReservedProduct["id"]) => {
    setReservedProducts((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const openCartModal = () => setIsOpen(true);
  const closeCartModal = () => setIsOpen(false);

  return (
    <CartContext.Provider
      value={{ reservedProducts, addItem, removeItem, openCartModal, closeCartModal }}
    >
      {children}
      <CartModal isOpen={isOpen} closeModal={closeCartModal} />
    </CartContext.Provider>
  );
};
