import axios from "axios";
import { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const apiURL = process.env.EXPO_PUBLIC_API_URL;
  const [cart, setCart] = useState([]);
  const [globalLoading, setGlobalLoading] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState(null);

  // useEffect(() => {
  //   const loadingStoreData = async () => {
  //     setGlobalLoading(true);
  //     const storageCart = await AsyncStorage.getItem("@asyncStorage:cart");

  //     if (storageCart) {
  //       try {
  //         setCart(JSON.parse(storageCart));
  //       } catch (error) {
  //         setPopUpMessage("Erro ao carregar o carrinho");
  //         setTimeout(() => {
  //           setPopUpMessage(null);
  //         }, 3000);
  //         AsyncStorage.clear();
  //       }
  //     }
  //     setGlobalLoading(false);
  //   };
  //   loadingStoreData();
  // }, []);

  const addToCart = async (product) => {
    const productExists = cart.find((item) => item.produto_id === product.produto_id);

    if (productExists) {
      const newCart = cart.map((item) => {
        if (item.produto_id === product.produto_id) {
          return { ...item, quantity: Number(item.quantity) + Number(product.quantity) };
        }
        return item;
      });
      setCart(newCart);
      // await AsyncStorage.setItem('@asyncStorage:cart', JSON.stringify(newCart));
    } else {
      const newCart = [...cart, product];
      setCart(newCart);
      // await AsyncStorage.setItem('@asyncStorage:cart', JSON.stringify(newCart));
    }
  }

  const removeFromCart = async (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
    await AsyncStorage.setItem('@asyncStorage:cart', JSON.stringify(newCart));
  }

  return (
    <CartContext.Provider value={{ cart, globalLoading, popUpMessage, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;