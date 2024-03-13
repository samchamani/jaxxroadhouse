import React, { createContext, useState } from "react";

export type Item = {
    name: string;
    thumbnail: string;
    price: number;
    quantity: number;
    extras: string[];
  }

type CartContextType = {
  items: Item[];
  onChange: (items: Item[]) => void
};

export const CartContext = createContext<CartContextType>({items: [], onChange: () => undefined});

export const CartProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);

  const onChange = (newList: Item[]) => setItems(newList);

  return <CartContext.Provider value={{items, onChange}}>{children}</CartContext.Provider>;
};
