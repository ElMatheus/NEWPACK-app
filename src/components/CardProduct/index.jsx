import { View, Text, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import styles from './styles';

const CardProduct = ({ name, image, unitary_price, toughness, dimension, cod }) => {
  // funcao de se o nome do produto for maior que alguns caracteres, ele vai cortar o nome e colocar tres pontinhos
  const truncate = (str, n) => {
    return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
  };

  const formatPrice = (price) => {
    return `R$${Number(price).toFixed(2).replace('.00', '')}`;
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.containerCard}>
        <View style={styles.containerCod}>
          <Text style={styles.cod}>#{cod}</Text>
        </View>
        <Text style={styles.titleProduct}>{truncate(name, 50)}</Text>
        <Text style={styles.titlePrice}>{formatPrice(unitary_price)}</Text>
        <View style={styles.specifications}>
          {toughness && (
            <View style={styles.specificationCard}>
              <Feather name="box" size={16} color="#4B6584" />
              <Text style={styles.specificationText}>{toughness}</Text>
            </View>
          )}
          {dimension && (
            <View style={styles.specificationCard}>
              <Feather name="maximize" size={16} color="#4B6584" />
              <Text style={styles.specificationText}>{dimension}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  )
}

export default CardProduct;