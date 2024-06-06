import { View, Text, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function ProductDetails({ route }) {
  const navigation = useNavigation();
  const { product } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <AntDesign style={styles.icon} name="left" size={24} color="#4B6584" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <FontAwesome5 style={styles.icon} name="shopping-cart" size={24} color="#4B6584" />
        </TouchableOpacity>
      </View>
      <Text>{product.produto_nome}</Text>
    </View>
  )
}