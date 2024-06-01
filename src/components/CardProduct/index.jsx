import { View, Text } from 'react-native';

import styles from './styles';

const CardProduct = ({ name, unitary_price, toughness, dimension, cod }) => {
  return (
    <View>
      <Text style={styles.title}>{name}</Text>
    </View>
  )
}

export default CardProduct;