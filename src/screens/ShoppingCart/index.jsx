import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { CartContext } from '../../contexts/CartContext';
import styles from './styles';
import { useContext, useEffect, useState } from 'react';
import CartItem from '../../components/CartItem';
import { useNavigation } from '@react-navigation/native';
import GlobalLoading from '../../components/GlobalLoading';
import { Feather } from '@expo/vector-icons';

export default function ShoppingCart() {
  const navigation = useNavigation();
  const [totalValue, setTotalValue] = useState(0);
  const { cart, onDecrease, onIncrease, removeFromCart, globalLoading, calculateTotal } = useContext(CartContext);
  const [popUp, setPopUp] = useState(null);

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + (item.produto_quantidade_mts || 1) * (Number(item.produto_quantidade) * Number(item.produto_preco)), 0);
    setTotalValue(total);
  }, [cart]);

  const onDelete = (item) => {
    removeFromCart(item);
  };

  const onDecreaseFunc = (item) => {
    onDecrease(item);
  };

  const onIncreaseFunc = (item) => {
    onIncrease(item);
  };

  const handleSubmit = async () => {
    if (cart.length === 0) {
      setPopUp('Adicione produtos ao carrinho para continuar');
      setTimeout(() => {
        setPopUp(null);
      }, 3000);
    } else {
      await calculateTotal();
      navigation.navigate('Checkout');
    }
  };

  return (
    <>
      {
        globalLoading ? (
          <GlobalLoading />
        ) : (
          <View style={styles.container}>
            <View style={styles.leftPanel}>

              <Text style={styles.title}>Produtos Selecionados</Text>
              <TouchableOpacity onPress={() => onDelete(item)} style={styles.btnDeleteProduct}>
                <Feather name="trash" size={20} color="#fff" />
              </TouchableOpacity>
              <ScrollView style={styles.productList}>
                {cart.map((item) => (
                  <TouchableOpacity key={item.produto_id} onPress={() => navigation.navigate('ProductDetails', { product: item })}>
                    <CartItem
                      item={item}
                      onIncrease={onIncreaseFunc}
                      onDecrease={onDecreaseFunc}
                      onDelete={onDelete}
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            <View style={styles.rightPanel}>
              <Text style={styles.title2}>
                Resumo do Carrinho
              </Text>
              <View style={styles.assistantView}>
                <Text style={styles.txt}>
                  Quantidade de Produtos
                </Text>
                <Text style={styles.txt}>
                  {cart.length}
                </Text>
              </View>
              <View style={styles.assistantView2}>
                <Text style={styles.title2}>
                  Total
                </Text>
                <Text style={styles.title2}>
                  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalValue)}
                </Text>
              </View>
              <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
                <Text style={styles.txtBtn}>Concluir Compra</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity onPress={handleTeste} style={styles.btn}>
                <Text style={styles.txtBtn}>Teste</Text>
              </TouchableOpacity> */}
              {/* <TouchableOpacity onPress={() => AsyncStorage.clear()} style={styles.btn}>
                <Text style={styles.txtBtn}>Limpar</Text>
              </TouchableOpacity> */}
            </View>
          </View>
        )}
    </>
  )
}