/**
 * Desenvolvido por Matheus Gomes - [https://github.com/ElMatheus | matheusgomesgoncalves.564@gmail.com]
 * Projeto: NEWPACK-APP
 * Data de criação: 2024-2025
 */

import { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [globalLoading, setGlobalLoading] = useState(false);
  const [totalValue, setTotalValue] = useState(0);
  const [msgError, setMsgError] = useState(null);

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
      setMsgError('Produto já adicionado ao carrinho');
      setTimeout(() => {
        setMsgError(null);
      }, 1500);
      setGlobalLoading(false);
      return;
    };

    const fullPrice = (product.produto_preco * product.produto_quantidade).toFixed(2);
    const totalValue = (product.produto_quantidade * product.produto_preco * (product.produto_quantidade_mts || 1)).toFixed(2);

    const newCart = [
      ...cart,
      {
        ...product,
        full_price: fullPrice,
        total_value: totalValue
      }
    ];
    setCart(newCart);
    await AsyncStorage.setItem('@asyncStorage:cart', JSON.stringify(newCart));
    setGlobalLoading(false);
  }

  const onDecrease = async (item) => {
    setGlobalLoading(true);

    const newCart = cart.map((cartItem) => {
      if (cartItem.produto_id === item.produto_id) {
        if (cartItem.produto_quantidade > 1) {
          const newQuantity = Number(cartItem.produto_quantidade) - 1;
          const fullPrice = (cartItem.produto_preco * newQuantity).toFixed(2);
          const totalValue = (newQuantity * cartItem.produto_preco * (cartItem.produto_quantidade_mts || 1)).toFixed(2);

          return {
            ...cartItem,
            produto_quantidade: newQuantity,
            total_value: totalValue,
            full_price: fullPrice
          };
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
        const newQuantity = Number(cartItem.produto_quantidade) + 1;
        const fullPrice = (cartItem.produto_preco * newQuantity).toFixed(2);
        const totalValue = (newQuantity * cartItem.produto_preco * (cartItem.produto_quantidade_mts || 1)).toFixed(2);

        return {
          ...cartItem,
          produto_quantidade: newQuantity,
          total_value: totalValue,
          full_price: fullPrice
        };
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
    const total = cart.reduce((acc, item) => acc + (item.produto_quantidade_mts || 1) * (Number(item.produto_quantidade) * Number(item.produto_preco)), 0);
    setTotalValue(total);
  };

  const clearCart = async () => {
    setGlobalLoading(true);
    setCart([]);
    await AsyncStorage.setItem('@asyncStorage:cart', JSON.stringify([]));
    setGlobalLoading(false);
  };

  return (
    <CartContext.Provider value={{ cart, globalLoading, addToCart, onDecrease, onIncrease, removeFromCart, calculateTotal, totalValue, clearCart, msgError }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;