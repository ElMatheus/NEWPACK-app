import { View, Text, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../../contexts/AuthContext';

const PopUp = ({ user, message, exitPopUp }) => {
  const { loadingStoreData } = useContext(AuthContext);

  const handleUnexpectedError = () => {
    exitPopUp(null);
    loadingStoreData();
  }

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.containerAlert}>
          <Icon style={styles.icon} name="alert-octagon" size={32} color="#f00" />
          <Text style={styles.txtError}>Ocorreu um erro!</Text>
        </View>
        <View style={styles.containerMsg}>
          {
            message == 'Name or password invalid' ? (
              <Text style={styles.msg}>
                Usuário ou senha inválidos!
              </Text>
            ) : message == 'Name or full name not found' ? (
              <Text style={styles.msg}>
                Não foi possível encontrar um usuário apelidado de <Text style={styles.user}>{user}</Text>
              </Text>
            ) : message == 'Este usuário não possui pedidos ainda' ? (
              <Text style={styles.msg}>
                Este usuário não possui pedidos ainda
              </Text>
            ) : (
              <Text style={styles.msg}>
                Ocorreu um erro inesperado!
              </Text>
            )
          }
        </View>
        <TouchableOpacity
          onPress={() => message == 'Name or password invalid' || message == 'Name or full name not found' || message == 'Este usuário não possui pedidos ainda' ? exitPopUp(null) : handleUnexpectedError()}
          style={styles.button}
        >
          <Text style={styles.txtButton}>Tentar novamente</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default PopUp