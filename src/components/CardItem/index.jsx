import { View, Text, Image } from 'react-native';
import styles from './styles';
import Fontisto from '@expo/vector-icons/Fontisto';

const CardItem = ({ image, quantity, name, desc, cod, price }) => {
  const truncate = (str, n) => {
    return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
  };

  // Se a descrição for muito longa, não mostrar o código
  const isDescriptionLong = desc && desc.length > 20;

  return (
    <View style={styles.card}>
      <View style={styles.containerInfos}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.containerQuantity}>
          <Text style={styles.txt}>{quantity}</Text>
        </View>
      </View>
      <View style={styles.containerProduct}>
        <Text style={styles.title}>{truncate(name, 27)}</Text>
        <View style={styles.containerTxts}>
          <Text style={styles.txtDesc}>{isDescriptionLong ? truncate(desc, 25) : desc}</Text>
          {!isDescriptionLong && cod && (
            <>
              <View style={styles.teste}>
                <Fontisto style={styles.ellipse} name="ellipse" size={4} color="#4B6584" />
              </View>
              <Text style={styles.txtDesc}>Cod. {truncate(cod, 8)}</Text>
            </>
          )}
        </View>
      </View>
      <View style={styles.containerPrice}>
        <Text style={styles.txtPrice}>R$</Text>
        <Text style={styles.txtPrice2}>{price}</Text>
      </View>
    </View>
  )
}

export default CardItem;