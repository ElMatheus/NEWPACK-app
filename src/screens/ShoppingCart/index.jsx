import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { CartContext } from '../../contexts/CartContext';
import styles from './styles';
import { useContext, useEffect, useState } from 'react';
import CartItem from '../../components/CartItem';
import { useNavigation } from '@react-navigation/native';
import GlobalLoading from '../../components/GlobalLoading';
import { Feather } from '@expo/vector-icons';
import { Swipeable } from 'react-native-gesture-handler';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

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
      navigation.navigate('FinishTab');
    }
  };

  const renderRightActions = (item) => (
    <TouchableOpacity onPress={() => onDelete(item)} style={styles.swipeableDeleteButton}>
      <Feather name="trash" size={24} color="#fff" />
    </TouchableOpacity>
  );

  return (
    <>
      {
        globalLoading ? (
          <GlobalLoading />
        ) : (
          cart.length === 0 ? (
            <View style={styles.container}>
              <View style={styles.leftPanel}>
                <Text style={styles.title}>Produtos Selecionados</Text>
                <View style={styles.containerNo}>
                  <SimpleLineIcons name="handbag" size={100} color="#4B6584" />
                  <Text style={styles.txtNo}>Seu carrinho está vazio!</Text>
                  <Text style={styles.title2No}>Selecione um item para adicionar ao carrinho e continuar</Text>
                </View>
              </View>
            </View>
          ) : (
            <View style={styles.container}>
              <ScrollView style={styles.productList}>
                <View style={styles.leftPanel}>
                  <Text style={styles.title}>Produtos Selecionados</Text>
                  <Text style={styles.swipeHint}>Deslize para o lado para remover um produto</Text>
                  {cart.map((item) => (
                    <Swipeable
                      key={item.produto_id}
                      renderRightActions={() => renderRightActions(item)}
                    >
                      <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { product: item })}>
                        <CartItem
                          item={item}
                          onIncrease={onIncreaseFunc}
                          onDecrease={onDecreaseFunc}
                          onDelete={onDelete}
                        />
                      </TouchableOpacity>
                    </Swipeable>
                  ))}
                </View>
              </ScrollView>
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
              </View>
            </View>
          )
        )
      }
    </>
  )
}