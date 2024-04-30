import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PopUp = ({ message }) => {
  return (
    <View style={styles.container}>
      <View>
        <Icon style={styles.icon} name="alert-octagon" size={32} color="#f00" />
        <Text>Ocorreu um erro!</Text>
      </View>
      <View>
        <Text>
          Não foi possível encontrar um usuário apelidado de {message}!
        </Text>
      </View>
      <TouchableOpacity>
        <Text>Tentar novamente</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PopUp