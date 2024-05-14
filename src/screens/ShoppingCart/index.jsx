import { View, Text } from 'react-native';

import Title from '../../components/Title';

import styles from './styles';

export default function ShoppingCart() {
  return (
    <View style={styles.container}>
      <Title txt={'Carrinho de compras - 😁😁'} />
    </View>
  )
}