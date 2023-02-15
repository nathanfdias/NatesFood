import { createContext, useState } from "react";


export const CartContext = createContext<CartContextData>({} as CartContextData);

import { ReactNode } from 'react';

interface CartContextData {
  productsCart: IProduct[];
  handleAddItemToCart: (id: number, name: string, imageUrl: string, price: number) => void;
  handleRemoveItemToCart: (id: number) => void;
  removalItem: (id: number) => void;
  clearCart: () => void;
}
interface CartProviderProps {
  children: ReactNode;
}

interface IProduct {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    quantidade: number;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [productsCart, setProductsCart] = useState<IProduct[]>([]);
  

  function handleAddItemToCart(id: number, name: string, imageUrl: string, price: number) {
    const itemObject = [...productsCart];
    const item = itemObject.find((product) => product.id === id);
    if (!item) {
      itemObject.push({
        id: id,
        name: name,
        imageUrl: imageUrl,
        price: price,
        quantidade: 1,
      });
    } else {
      item.quantidade = item.quantidade + 1;
    }

    setProductsCart(itemObject);
  }

  function handleRemoveItemToCart(id: number) {
    const itemObject = [...productsCart];
    const item = itemObject.find((product) => product.id === id);

    if (item && item.quantidade > 1) {
      item.quantidade = item.quantidade - 1;
      setProductsCart(itemObject);
    } else {
      const arrayFiltered = itemObject.filter((product) => product.id !== id);
      setProductsCart(arrayFiltered);
    }
  }

  function removalItem(id: number) {
    const itemObject = [...productsCart];

    const arrayFiltered = itemObject.filter((product) => product.id !== id);
    setProductsCart(arrayFiltered);
  }

  function clearCart() {
    setProductsCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        productsCart,
        handleAddItemToCart,
        handleRemoveItemToCart,
        removalItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};