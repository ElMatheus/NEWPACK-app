import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PopUp = ({ user, message, exitPopUp }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.containerAlert}>
          <Icon style={styles.icon} name="alert-octagon" size={32} color="#f00" />
          <Text style={styles.txtError}>Ocorreu um erro!</Text>
        </View>
        <View style={styles.containerMsg}>
          {
            message == 'Nome ou senha inválidos' ? (
              <Text style={styles.msg}>
                Usuário ou senha inválidos!
              </Text>
            ) : message == 'Usuário não encontrado' ? (
              <Text style={styles.msg}>
                Não foi possível encontrar um usuário apelidado de <Text style={styles.user}>{user}</Text>
              </Text>
            ) : (
              <Text style={styles.msg}>
                Ocorreu um erro inesperado!
              </Text>
            )
          }
        </View>
        <TouchableOpacity onPress={() => exitPopUp(null)} style={styles.button}>
          <Text style={styles.txtButton}>Tentar novamente</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default PopUp