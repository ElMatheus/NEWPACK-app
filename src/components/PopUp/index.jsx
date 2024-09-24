import { View, Text } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const PopUp = ({ message }) => {
  return (
    <View style={styles.teste}>
      <View style={styles.container}>
        <Icon style={styles.icon} name="alert-circle-outline" size={32} color="#f00" />
        <View style={styles.containerTxt}>
          <Text style={styles.title}>{message}</Text>
        </View>
      </View>
    </View>

  )
}

export default PopUp