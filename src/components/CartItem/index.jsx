import styles from './styles';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useState, useEffect } from 'react';

const CartItem = ({ item, onIncrease, onDecrease }) => {
  const [quantityAll, setQuantityAll] = useState(item.produto_quantidade);

  useEffect(() => {
    setQuantityAll(item.produto_quantidade);
  }, [item.produto_quantidade]);

  const truncate = (str, n) => {
    return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <View style={styles.product}>
      <Image source={{ uri: item.produto_imagem }} style={styles.image} />
      <View style={styles.containerInfos}>
        <Text style={styles.txtName}>
          {truncate(item.produto_nome, 55)}
        </Text>
        <View style={styles.containerDesc}>
          <Text style={styles.txtPrice}>
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(item.produto_preco))}
          </Text>
          <Text style={styles.txtDesc}>
            ({item.produto_desc})
          </Text>
        </View>
      </View>
      <View style={styles.containerQuant}>
        <TouchableOpacity onPress={() => onIncrease(item)}>
          <AntDesign name="plus" size={20} color="#4A6584" />
        </TouchableOpacity>
        <Text style={styles.txtQntd}>{quantityAll}</Text>
        <TouchableOpacity onPress={() => onDecrease(item)}>
          <AntDesign name="minus" size={20} color="#4A6584" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CartItem;