import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { CartContext } from '../../contexts/CartContext';
import styles from './styles';
import { useContext, useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import CartItem from '../../components/CartItem';
import { useNavigation } from '@react-navigation/native';

export default function ShoppingCart() {
  const navigation = useNavigation();
  const [totalValue, setTotalValue] = useState(0);
  const { cart, onDecrease, onIncrease, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + Number(item.produto_quantidade) * Number(item.total_value), 0);
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

  return (
    <View style={styles.container}>
      <View style={styles.leftPanel}>
        <Text style={styles.title}>Produtos Selecionados</Text>
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
        <Text style={styles.title}>
          Resumo do Carrinho
        </Text>
        <View style={styles.assistantView}>
          <Text style={styles.txt}>
            Quantidade de Produtos:
          </Text>
          <Text style={styles.txt}>
            {cart.length}
          </Text>
        </View>
        <View style={styles.assistantView}>
          <Text style={styles.txt}>
            Preço Total:
          </Text>
          <Text style={styles.txt}>
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalValue)}
          </Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtBtn}>Concluir Compra</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}