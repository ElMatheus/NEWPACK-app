import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function ShoppingCart() {
  return (
    <View style={styles.container}>
      <View style={styles.leftPanel}>
        <Text style={styles.title}>Produtos Selecionados</Text>
        <View style={styles.productList}>
          {/* Produtos serão adicionados aqui  */}
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
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtBtn}>Concluir Compra</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}