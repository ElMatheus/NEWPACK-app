import { View, Text, Image } from 'react-native';

import styles from './styles';

const CardProduct = ({ name, image, unitary_price, toughness, dimension, cod }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.containerCard}>
        <View style={styles.containerCod}>
          <Text style={styles.cod}>#{cod}</Text>
        </View>
        <Text>Teste textehih</Text>
        {/* <View>

        </View> */}
      </View>
    </View>
  )
}

export default CardProduct;