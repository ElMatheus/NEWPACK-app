import { View, Text } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const NoProductsMessage = ({ msg }) => {
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} name="sad-tear" size={42} color="#f3f3f3" />
      <View style={styles.containerMessage}>
        <Text style={styles.message}>{msg}</Text>
      </View>
    </View>
  )
}

export default NoProductsMessage