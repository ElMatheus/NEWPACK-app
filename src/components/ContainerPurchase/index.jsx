import styles from './styles.js';
import { View, Text, TouchableOpacity } from 'react-native';

const ContainerPurchase = ({ type, desc, totalPrice, handleAddToCart }) => {
  return (
    <>
      {
        type == 'caixa' ? (
          <View style={styles.containerPurchase}>
            <View style={styles.containerPrice}>
              <Text style={styles.txtDesc}>{desc}</Text>
              <Text style={styles.txtPrice}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPrice)}</Text>
            </View>
            {/* botao de adicionar este produto para o carrinho */}
            <TouchableOpacity onPress={handleAddToCart} style={styles.addToCart}>
              <Text style={styles.txtAddToCart}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          </View>
        ) : type == 'rolo' ? (
          <View style={styles.containerPurchase}>
            <View style={styles.containerPrice}>
              <Text style={styles.txtDesc}>Preço por metro linear:</Text>
              <Text style={styles.txtPrice}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPrice)}</Text>
              <Text style={styles.txtDesc}>{desc}</Text>
            </View>
            {/* botao de adicionar este produto para o carrinho */}
            <TouchableOpacity onPress={handleAddToCart} style={styles.addToCart}>
              <Text style={styles.txtAddToCart}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          </View>
        ) : type == 'unidade' ? (
          <View style={styles.containerPurchase}>
            <View style={styles.containerPrice}>
              <Text style={styles.txtDesc}>Preço por unidade:</Text>
              <Text style={styles.txtPrice}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPrice)}</Text>
              <Text style={styles.txtDesc}>{desc}</Text>
            </View>
            {/* botao de adicionar este produto para o carrinho */}
            <TouchableOpacity onPress={handleAddToCart} style={styles.addToCart}>
              <Text style={styles.txtAddToCart}>Adicionar ao carrinho</Text>
            </TouchableOpacity>
          </View>
        ) : null
      }
    </>
  );
}

export default ContainerPurchase;