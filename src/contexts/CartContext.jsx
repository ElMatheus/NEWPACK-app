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
          return { ...item, produto_quantidade: Number(item.produto_quantidade) + Number(product.produto_quantidade) };
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

  const onDecrease = (item) => {
    const newCart = cart.map((cartItem) => {
      if (cartItem.produto_id === item.produto_id) {
        if (cartItem.produto_quantidade === 1) {
          return cartItem;
        } else {
          return { ...cartItem, produto_quantidade: Number(cartItem.produto_quantidade) - 1 };
        }
      }
      return cartItem;
    });
    setCart(newCart);
  };

  const onIncrease = (item) => {
    const newCart = cart.map((cartItem) => {
      if (cartItem.produto_id === item.produto_id) {
        return { ...cartItem, produto_quantidade: Number(cartItem.produto_quantidade) + 1 };
      }
      return cartItem;
    });
    setCart(newCart);
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => item.produto_id !== product.produto_id);
    setCart(newCart);
  }

  return (
    <CartContext.Provider value={{ cart, globalLoading, popUpMessage, addToCart, onDecrease, onIncrease, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;