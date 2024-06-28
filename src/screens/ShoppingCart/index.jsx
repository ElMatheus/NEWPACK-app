import { View, Text, TouchableOpacity, Image } from 'react-native';
import { CartContext } from '../../contexts/CartContext';
import styles from './styles';
import { useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function ShoppingCart() {
  const truncate = (str, n) => {
    return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
  };
  const { cart } = useContext(CartContext);

  const teste = () => {
    console.log(cart);
  }
  return (
    <View style={styles.container}>
      <View style={styles.leftPanel}>
        <Text style={styles.title}>Produtos Selecionados</Text>
        <View style={styles.productList}>
          {
            cart.map((item) => (
              <View key={item.produto_id} style={styles.product}>
                <Image source={{ uri: item.produto_imagem }} style={styles.image} />
                <View style={styles.containerInfos}>
                  <Text style={styles.txtName}>
                    {truncate(item.produto_nome, 45)}
                  </Text>
                  <Text style={styles.txtPrice}>
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.total_value)}
                  </Text>
                  <View style={styles.containerQuantity}>
                    <TouchableOpacity>
                      <AntDesign name="minuscircleo" size={20} color="#b9c3cd" />
                    </TouchableOpacity>
                    <Text style={styles.txtQntd}>{item.quantity}</Text>
                    <TouchableOpacity>
                      <AntDesign name="pluscircleo" size={20} color="#b9c3cd" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnDeleteProduct}>
                      <Feather name="trash" size={18} color="#000" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))
          }
        </View>
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
            0
          </Text>
        </View>
        <View style={styles.assistantView}>
          <Text style={styles.txt}>
            Preço Total:
          </Text>
          <Text style={styles.txt}>
            R$ 0,00
          </Text>
        </View>
        <TouchableOpacity onPress={teste} style={styles.btn}>
          <Text style={styles.txtBtn}>Concluir Compra</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}