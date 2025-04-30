import { View, Text, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

const CardProduct = ({ name, image, unitary_price, toughness, dimension, cod, status }) => {
  const truncate = (str, n) => {
    return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
  };

  const formatPrice = (price) => {
    return `R$${Number(price).toFixed(2).replace('.00', '')}`;
  };

  return (
    <View style={[styles.card, status === 'Oferta' && styles.offerCard]}>
      {status === 'Oferta' && (
        <View style={styles.offerBadge}>
          <FontAwesome name="star" size={16} color="#FFD700" />
          <Text style={styles.offerText}>OFERTA</Text>
          <FontAwesome name="star" size={16} color="#FFD700" />
        </View>
      )}
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.containerCard}>
        <View style={[styles.containerCod, status === 'Oferta' && styles.offerContainerCod]}>
          <Text style={styles.cod}>#{cod}</Text>
        </View>
        <Text style={[styles.titleProduct, status === 'Oferta' && styles.offerTitleProduct]}>{truncate(name, 50)}</Text>
        <Text style={[styles.titlePrice, status === 'Oferta' && styles.offerTitlePrice]}>{formatPrice(unitary_price)}</Text>
        <View style={styles.specifications}>
          {toughness && (
            <View style={[styles.specificationCard, status === 'Oferta' && styles.offerSpecificationCard]}>
              <Feather name="box" size={16} color={status === 'Oferta' ? "#FFD700" : "#4B6584"} />
              <Text style={[styles.specificationText, status === 'Oferta' && styles.offerSpecificationText]}>{toughness}</Text>
            </View>
          )}
          {dimension && (
            <View style={[styles.specificationCard, status === 'Oferta' && styles.offerSpecificationCard]}>
              <Feather name="maximize" size={16} color={status === 'Oferta' ? "#FFD700" : "#4B6584"} />
              <Text style={[styles.specificationText, status === 'Oferta' && styles.offerSpecificationText]}>{dimension}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  )
}

export default CardProduct;