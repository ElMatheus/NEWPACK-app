import styles from './styles';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useState, useEffect } from 'react';

const CartItem = ({ item, onIncrease, onDecrease, onDelete }) => {
  const [quantityAll, setQuantityAll] = useState(item.quantity);

  useEffect(() => {
    setQuantityAll(item.quantity);
  }, [item.quantity]);

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
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.total_value)}
          </Text>
          <Text style={styles.txtDesc}>
            ({item.produto_descricao})
          </Text>
        </View>
        <View style={styles.containerQuantity}>
          <TouchableOpacity onPress={() => onDecrease(item)}>
            <AntDesign name="minuscircleo" size={20} color="#b9c3cd" />
          </TouchableOpacity>
          <Text style={styles.txtQntd}>{quantityAll}</Text>
          <TouchableOpacity onPress={() => onIncrease(item)}>
            <AntDesign name="pluscircleo" size={20} color="#b9c3cd" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDelete(item)} style={styles.btnDeleteProduct}>
            <Feather name="trash" size={16} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default CartItem;