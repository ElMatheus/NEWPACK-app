import { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [globalLoading, setGlobalLoading] = useState(false);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const loadingStoreData = async () => {
      setGlobalLoading(true);
      const localCart = await AsyncStorage.getItem('@asyncStorage:cart');
      if (localCart) {
        setCart(JSON.parse(localCart));
      }
      setGlobalLoading(false);
    }
    loadingStoreData();
  }, []);

  const addToCart = async (product) => {
    const productExists = cart.find((item) => item.produto_id === product.produto_id);
    setGlobalLoading(true);
    if (productExists) {
      const newCart = cart.map((item) => {
        if (item.produto_id === product.produto_id) {
          return { ...item, produto_quantidade: Number(item.produto_quantidade) + Number(product.produto_quantidade) };
        }
        return item;
      });
      setCart(newCart);
      await AsyncStorage.setItem('@asyncStorage:cart', JSON.stringify(newCart));
    } else {
      const newCart = [...cart, product];
      setCart(newCart);
      await AsyncStorage.setItem('@asyncStorage:cart', JSON.stringify(newCart));
    }
    setGlobalLoading(false);
  }

  const onDecrease = async (item) => {
    setGlobalLoading(true);
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
    await AsyncStorage.setItem('@asyncStorage:cart', JSON.stringify(newCart));
    setGlobalLoading(false);
  };

  const onIncrease = async (item) => {
    setGlobalLoading(true);
    const newCart = cart.map((cartItem) => {
      if (cartItem.produto_id === item.produto_id) {
        return { ...cartItem, produto_quantidade: Number(cartItem.produto_quantidade) + 1 };
      }
      return cartItem;
    });
    setCart(newCart);
    await AsyncStorage.setItem('@asyncStorage:cart', JSON.stringify(newCart));
    setGlobalLoading(false);
  };

  const removeFromCart = async (product) => {
    setGlobalLoading(true);
    const newCart = cart.filter((item) => item.produto_id !== product.produto_id);
    setCart(newCart);
    await AsyncStorage.setItem('@asyncStorage:cart', JSON.stringify(newCart));
    setGlobalLoading(false);
  };

  const calculateTotal = () => {
    const total = cart.reduce((acc, item) => acc + Number(item.produto_quantidade) * Number(item.total_value), 0);
    setTotalValue(total);
  };

  return (
    <CartContext.Provider value={{ cart, globalLoading, addToCart, onDecrease, onIncrease, removeFromCart, calculateTotal, totalValue }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;