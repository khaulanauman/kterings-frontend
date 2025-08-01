import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [note, setNote] = useState("");

  // Load full cart (cart + note) from localStorage on first load
  useEffect(() => {
    const stored = localStorage.getItem("kterings_cart_full");
    if (stored) {
      const parsed = JSON.parse(stored);
      setCart(parsed.cart || []);
      setNote(parsed.note || "");
    }
  }, []);

  // Update localStorage whenever cart or note changes
  useEffect(() => {
    localStorage.setItem(
      "kterings_cart_full",
      JSON.stringify({ cart, note })
    );
  }, [cart, note]);

  // Add or increase quantity
 const addToCart = (item) => {
  setCart((prev) => {
    const existing = prev.find((x) => x._id === item._id);
    if (existing) {
      return prev.map((x) =>
        x._id === item._id ? { ...x, quantity: x.quantity + (item.quantity || 1) } : x
      );
    } else {
      return [...prev, { ...item, quantity: item.quantity || 1 }];
    }
  });
};

  // Remove item
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item._id !== id));
  };

  // Update quantity manually
  const updateQuantity = (id, qty) => {
    setCart((prev) =>
      prev.map((item) => (item._id === id ? { ...item, quantity: qty } : item))
    );
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
    setNote("");
  };

  return (
    <CartContext.Provider
      value={{ cart, note, setNote, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}